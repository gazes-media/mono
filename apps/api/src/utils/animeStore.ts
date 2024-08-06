import { Anime, Prisma, PrismaClient } from "@prisma/client";
import { episodeToNumber, handleError } from "./helper";
import { fetcher } from "./fetcher";
import { AnimeNeko } from "../interfaces/anime.interface";
import { LatestEpisode } from "../interfaces/latest.interface";
import { Daum, Kitsu, KitsuAnime } from "../interfaces/kitsu.interface";
import Fuse from "fuse.js";
import { load } from "cheerio";
import Subtitlesvtt from "../interfaces/subtitlesvtt.interface";
import { PstreamData } from "../interfaces/pstreamdata.interface";

const vostfrUrl = "https://neko.ketsuna.com/animes-search-vostfr.json";

export function buildProxiedUrl(url: string) {
    return `https://proxy.gazes.fr/?url=${encodeURIComponent(url)}`;
}
/**
 * This function will fetch all Data and increment the Database onCall
 * @param prisma
 * @returns
 */
export async function fetchAll(prisma: PrismaClient): Promise<Prisma.BatchPayload> {
    const [responseVostfr, errorVostfr] = await fetcher<AnimeNeko[]>(vostfrUrl);

    if (errorVostfr) return errorVostfr;
    if (!Array.isArray(responseVostfr))
        return {
            count:0
        }

    const vostfr = responseVostfr.map(
        ({ url_image, ...anime }) => {
            return {
                ...anime,
                url_image: buildProxiedUrl(
                    "https://neko.ketsuna.com" +
                    url_image.replace("https://neko-sama.fr", ""),
                ),
            };
        },
    );

    return await prisma.anime.createMany({
        data: vostfr.map(
            (anime) =>
            ({
                nekoId: anime.id,
                nekoUrl: anime.url,
                titleFr: anime.title,
                others: [anime.others],
                poster: anime.url_image,
                genres: anime.genres,
                status: anime.status === "2" ? "finished" : "current",
                animeType: anime.type.toLowerCase().replace("m0v1e", "movie"),
                startDate: new Date(Number(anime.start_date_year), 0, 1),
            }),
        ),
        skipDuplicates: true,
    });
}

/**
 * This function fetches the latest episodes from a website and stores them
    in an array.
 */
export async function fetchLatest(): Promise<LatestEpisode[]> {
    const [data, error] = await fetcher("https://neko.ketsuna.com", "text");
    if (error) {
        return;
    }
    const parsedData = /var lastEpisodes = (.+)\;/gm.exec(data);

    let latestEpisodes: LatestEpisode[] = [];
    if (parsedData) latestEpisodes = JSON.parse(parsedData[1]);

    return latestEpisodes.map(({ url_bg, url_image, ...episode }) => {
        return {
            ...episode,
            url_image: buildProxiedUrl("https://neko.ketsuna.com" + url_image.replace("https://neko-sama.fr", "")),
            url_bg: buildProxiedUrl("https://neko.ketsuna.com" + url_bg.replace("https://neko-sama.fr", "")),
        };
    });
}

/* This function will ask first kitsu.io for the Anime Information (Get the
    name of the serie and prepend it to the episode title) */
export async function getKitsuIDFromTitle(
    title: string,
    date: Date,
    type: string,
): Promise<[number, any]> {
    const kitsuUrl = `https://kitsu.io/api/edge/anime?filter[text]=${title}`;

    let [kitsuData, error] = await fetcher<Kitsu>(kitsuUrl);
    if (error) return [null, error];

    // now we will find the result who match the more.

    const found = kitsuData["data"].find(({ attributes}) => {
        return new Date(attributes.startDate).getFullYear() === date.getFullYear() && attributes.showType.toLowerCase() === type.toLowerCase()
    });

    return [parseInt(found?.id), null];
}

/* Fetches the Neko ID of an anime from the database based on provided
attributes. */
export async function fetchNekoIDFromKitsu(prisma: PrismaClient, {
    attributes,
}: Daum): Promise<[number, any]> {
    const startDate =  new Date(attributes.startDate)
    let [animes, error] = await handleError(
        prisma.anime.findMany({
            where: {
                startDate: new Date(startDate.getFullYear(),0,1),
                animeType: attributes.showType.toLowerCase(),
            },
            select: {
                others: true,
                titleFr: true,
                nekoId: true,
            },
        }),
    );

    if (error) return [null, error];
    let [result] = new Fuse(animes, {
        includeScore: false,
        keys: ["others", "titleFr"],
    }).search<Anime>(attributes.canonicalTitle);

    return [result?.item.nekoId ?? null, null];
}

// TODO: typé animeRelations
export async function fetchAnimeRelations(
    prisma: PrismaClient,
    id: number,
    withRelation: boolean,
): Promise<
    [{ prequelID: number; sequelID: number; relationsID: string[] }, any]
> {
    const url = `https://kitsu.io/api/edge/media-relationships?filter%5Bsource_id%5D=${id}&filter%5Bsource_type%5D=Anime&include=destination&sort=role`;
    let [{ data: animeRelations }, error] = await fetcher(url);

    if (error) return [null, error];

    let filteredRelations = animeRelations.filter(
        (a) => a.relationships.destination.data.type == "anime",
    );

    const prequelID =
        parseInt(
            filteredRelations.find((a) => a.attributes.role === "prequel")
                ?.relationships.destination.data.id ?? "",
        ) || null;
    const sequelID =
        parseInt(
            filteredRelations.find((a) => a.attributes.role === "sequel")
                ?.relationships.destination.data.id ?? "",
        ) || null;

    const relationsID = filteredRelations
        .map((a) => a.relationships.destination.data.id)
        .filter((id) => id !== prequelID && id !== sequelID);

    if (withRelation) {
        await Promise.all([
            ...(prequelID ? [saveKitsuAnime(prisma, prequelID, false)] : []),
            ...(sequelID ? [saveKitsuAnime(prisma, sequelID, false)] : []),
            ...relationsID.map((id) => saveKitsuAnime(prisma, parseInt(id), false)),
        ]);
    }

    return [{ prequelID, sequelID, relationsID }, null];
}

export async function fetchKitsuAnime(id: number): Promise<[Daum, null]> {
    const [{ data: kitsuAnime }, error] = await fetcher<KitsuAnime>(
        `https://kitsu.io/api/edge/anime/${id}`,
    );
    return [kitsuAnime, error];
}

/* This function will ask kitsu.io based on the anime id to get the Anime
Information */
export async function saveKitsuAnime(
    prisma: PrismaClient,
    id: number,
    withRelation: boolean = true,
): Promise<[Anime, any]> {
    let kitsuExist = await prisma.dataToFetch.findFirst({
        where:{
            kitsuId: id
        },
        include: {
            anime:true
        }
    });


    if (kitsuExist?.anime?.status == "finished") {
        await fetchAnimeRelations(prisma, id, withRelation);
        return [kitsuExist?.anime, null];
    }

    const [kitsuAnime, fetchKitsuError] = await fetchKitsuAnime(id);
    if (fetchKitsuError || !kitsuAnime)
        return [null, fetchKitsuError || "Failed to fetch Kitsu anime data"];

    let nekoIdDb = kitsuExist?.anime?.nekoId;
    if (!nekoIdDb) {
        const [nekoId, fetchNekoIDError] =
            await fetchNekoIDFromKitsu(prisma, kitsuAnime);
        if (fetchNekoIDError || !nekoId)
            return [null, fetchNekoIDError || "No NekoID found for this anime"];

        nekoIdDb = nekoId;
    }

    const [relations, fetchRelationsError] = await fetchAnimeRelations(
        prisma,
        id,
        withRelation,
    );
    if (fetchRelationsError) return [null, fetchRelationsError];

    const animeData: Prisma.AnimeUpdateInput = {
        nekoId: nekoIdDb,
        episodesCount: kitsuAnime.attributes.episodeCount ?? 0,
        status: kitsuAnime.attributes.status,
        animeType: kitsuAnime.attributes.showType,
        titleEn: kitsuAnime.attributes.canonicalTitle,
        titleEnJp: kitsuAnime.attributes.titles.en_jp,
        titleFr:
            kitsuAnime.attributes.titles?.en ?? kitsuAnime.attributes.titles.en_jp,
        titleJp: kitsuAnime.attributes.titles.ja_jp,
        youtubeTrailerId: kitsuAnime.attributes.youtubeVideoId,
        others: kitsuAnime.attributes.abbreviatedTitles,
        poster: kitsuAnime.attributes.posterImage?.original,
        background: kitsuAnime.attributes.coverImage?.original,
        banner: kitsuAnime.attributes.coverImage?.original,
        startDate: new Date(kitsuAnime.attributes.startDate),
        endDate: kitsuAnime.attributes.endDate
            ? new Date(kitsuAnime.attributes.endDate)
            : null,
        prequel_id: relations.prequelID,
        sequel_id: relations.sequelID,
        relations_ids: relations.relationsID.map(Number).filter(Number.isFinite),
    };
    console.log(id, kitsuExist?.anime);
    if (!kitsuExist) {
        animeData.dataToFetch = { create: { kitsuId: parseInt(kitsuAnime.id) } };
    }

    const [updatedAnime, animeUpdateError ] = await handleError(prisma.anime.update({
        where: { nekoId: nekoIdDb },
        data: animeData,
        include: { dataToFetch: true },
    }));

    if(animeUpdateError){
        return [null, animeUpdateError]
    }

    return [updatedAnime, null];
}

export async function resolveKitsuId(
    title: string,
    date: Date,
    type: string
): Promise<number | undefined> {
    const [resolvedKitsuId, error] = await getKitsuIDFromTitle(title, date,type);
    if (error) {
        console.error("Error resolving Kitsu ID:", error);
        return undefined;
    }
    return resolvedKitsuId;
}

/* This function retrieves information about an anime based on its ID and
language, including its synopsis, cover image URL, and episodes. */
export async function getAnime(prisma: PrismaClient, nekoId: number) {
    try {
        const animeInDb = await prisma.anime.findFirst({
            where: { nekoId },
            include: {
                dataToFetch: true,
                Episodes: true,
            },
        });

        if (!animeInDb) {
            console.warn(`Anime with Neko ID ${nekoId} not found in the database.`);
            return null;
        }

        let idKitsu =
            animeInDb.dataToFetch?.kitsuId ??
            (await resolveKitsuId(animeInDb.titleFr, animeInDb.startDate, animeInDb.animeType));

        if (!idKitsu) {
            console.warn("Kitsu ID could not be resolved.");
            return null;
        }

        const [anime, animeError] = await saveKitsuAnime(prisma, idKitsu);
        if (animeError || !anime) {
            console.error("Error saving Kitsu anime:", animeError);
            return null;
        }

        const [animeHtml, animeHtmlError] = await fetcher(
            `https://neko.ketsuna.com/${anime.nekoUrl.replace(
                "https://neko-sama.fr/",
                "",
            )}`,
            "xml",
        );

        if (animeHtmlError || !animeHtml) {
            console.error("Error fetching anime HTML:", animeHtmlError);
            return null;
        }

        const episodes = animeHtml(".episodes .col-xs-12")
            .map((_, el) => {
                const episode = load(el);
                const episodeNumber = episode("a").text().trim().split(" - ");
                const lastNumber = episodeNumber[episodeNumber.length - 1];
                return {
                    title: episode("a").text().trim(),
                    num: episodeToNumber(lastNumber),
                    url: episode("a").attr("href") as string,
                    time: "24:00",
                    episode: episodeToNumber(lastNumber).toString(),
                    url_image: anime.poster,
                    m3u8: "",
                };
            })
            .get()
            .reverse();

        const fetchRelatedAnime = async (kitsuId: number) => {
            const relatedAnime = await prisma.anime.findFirst({
                where: { dataToFetch: { kitsuId } },
                select: {
                    nekoId: true,
                    titleFr: true,
                    poster: true,
                },
            });
            return relatedAnime?.nekoId || null;
        };

        const previous = anime.prequel_id
            ? await fetchRelatedAnime(anime.prequel_id)
            : null;

        const next = anime.sequel_id
            ? await fetchRelatedAnime(anime.sequel_id)
            : null;

        const { prequel_id, sequel_id, ...animeFull } = anime;

        return {
            ...animeFull,
            previous,
            next,
            episodes,
        };
    } catch (error) {
        console.error("An unexpected error occurred:", error);
        return null;
    }
}

/* This function retrieves the video URL and subtitle data for a given episode URL. */
export async function getEpisodeVideo(
    url: string
): Promise<
    undefined | { uri: string; subtitlesVtt: Subtitlesvtt[]; baseUrl: string }
> {
    return new Promise(async (resolve) => {
        try {
            const episodeUrl = `https://neko.ketsuna.com${url.replace("https://neko-sama.fr", "")}`

            const [nekoData, nekoDataError] = await fetcher(episodeUrl, "text");
            if (nekoDataError) return;

            const pstreamUrl = /(\n(.*)video\[0] = ')(.*)(';)/gm.exec(
                nekoData,
            )?.[3] as string;
            if (!pstreamUrl) return resolve(undefined);

            const [pstreamData, pstreamDataError] = await fetcher(
                `https://proxy.ketsuna.com/?url=${encodeURIComponent(pstreamUrl)}`,
                "text",
            );
            if (pstreamDataError) return;

            const baseurl = pstreamUrl.split("/").slice(0, 3).join("/");
            const loadedHTML = load(pstreamData);
            const scripts = loadedHTML("script");
            const scriptsSrc = scripts
                .map((i, el) => loadedHTML(el).attr("src"))
                .get();
            let m3u8Url: string = "";
            let subtitlesvtt: Subtitlesvtt[] = [];

            for (const scriptSrc of scriptsSrc) {
                if (scriptSrc.includes("cloudflare-static")) continue;

                const [pstreamScript, pstreamScriptError] = await fetcher(
                    `https://proxy.gazes.fr/?url=${encodeURIComponent(scriptSrc)}`,
                    "text",
                );
                if (pstreamScriptError) return;

                let m3u8UrlB64 =
                    /e.parseJSON\(atob\(t\).slice\(2\)\)\}\(\"([^;]*)"\),/gm.exec(
                        pstreamScript,
                    )?.[1] as string;
                if (m3u8UrlB64) {
                    const b64 = JSON.parse(atob(m3u8UrlB64).slice(2));
                    const pstream: PstreamData = b64;
                    m3u8Url = Object.values(pstream).find(
                        (data: any) => typeof data === "string" && data.includes(".m3u8"),
                    ) as string;
                    subtitlesvtt = pstream.subtitlesvtt;
                    break;
                } else {
                    m3u8UrlB64 = /e.parseJSON\(n\)}\(\"([^;]*)"\),/gm.exec(
                        pstreamScript,
                    )?.[1] as string;
                    if (m3u8UrlB64) {
                        const b64 = JSON.parse(atob(m3u8UrlB64).slice(2));
                        const pstream: PstreamData = b64;
                        m3u8Url = Object.values(pstream).find(
                            (data: any) =>
                                typeof data === "string" && data.includes(".m3u8"),
                        ) as string;
                        subtitlesvtt = pstream.subtitlesvtt;
                        break;
                    } else {
                        m3u8UrlB64 = /n=atob\("([^"]+)"/gm.exec(
                            pstreamScript,
                        )?.[1] as string;
                        if (m3u8UrlB64) {
                            const b64 = JSON.parse(
                                atob(m3u8UrlB64)
                                    .replace(/\|\|\|/, "")
                                    .slice(29),
                            );
                            const pstream: PstreamData = b64;
                            m3u8Url = Object.values(pstream).find(
                                (data: any) =>
                                    typeof data === "string" && data.includes(".m3u8"),
                            ) as string;
                            subtitlesvtt = pstream.subtitlesvtt;
                            break;
                        }
                    }
                }
            }
            if (m3u8Url !== "") {
                resolve({
                    uri: m3u8Url,
                    subtitlesVtt: subtitlesvtt,
                    baseUrl: baseurl,
                });
            } else {
                resolve(undefined);
            }
        } catch (e) {
            resolve(undefined);
        }
    });
}
