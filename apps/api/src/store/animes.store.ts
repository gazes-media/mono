import { load } from "cheerio";
import { Anime } from "../interfaces/anime.interface";
import { Episode } from "../interfaces/episode.interface";
import { LatestEpisode } from "../interfaces/latest.interface";
import { PstreamData } from "../interfaces/pstreamdata.interface";
import Subtitlesvtt from "../interfaces/subtitlesvtt.interface";
import { fetcher } from "../utils/fetcher";
import { Daum, Kitsu, KitsuAnime } from "../interfaces/kitsu.interface";
import { prisma } from "..";
import Fuse from "fuse.js";
import { Prisma } from "@prisma/client";
import { next } from "cheerio/lib/api/traversing";

const vostfrUrl = "https://neko.ketsuna.com/animes-search-vostfr.json";
const vfUrl = "https://neko.ketsuna.com/animes-search-vf.json";

function buildProxiedUrl(url: string) {
	return `https://proxy.gazes.fr/?url=${encodeURIComponent(url)}`;
}

export class AnimeStore {
	static all: Anime[] = [];
	static vostfr: Anime[] = [];
	static vf: Anime[] = [];

	static latest: LatestEpisode[] = [];

	/* The function fetches data from two different URLs and
  combines them into one array with a language property added to
  each object.*/
	static async fetchAll(): Promise<void> {
		try {
			const responseVostfr = await fetcher<Anime[]>(vostfrUrl);
			const responseVF = await fetcher<Anime[]>(vfUrl);
			if (Array.isArray(responseVostfr) && Array.isArray(responseVF)) {
				this.vostfr = responseVostfr.map(({ url_image, coverUrl, ...anime }) => {
					return {
						...anime,
						coverUrl: buildProxiedUrl("https://neko.ketsuna.com" + url_image.replace("https://neko-sama.fr", "")),
						url_image: buildProxiedUrl("https://neko.ketsuna.com" + url_image.replace("https://neko-sama.fr", "")),
					};
				});
				this.vf = responseVF;
				this.all = [...this.vostfr, ...this.vf];
                await prisma.anime.createMany({
                    data: this.vostfr.map((anime) => ({
                        nekoId: anime.id,
                        titleFr: anime.title,
                        poster: anime.url_image,
                        genres: anime.genres,
                        status: anime.status === "2" ? "finished" : "current",
                        animeType: anime.type.toLowerCase().replace("m0v1e", "movie"),
                    })),
                    skipDuplicates: true,
                })
			} else {
				console.log("Problem occured while retrieving data from the server.");
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	/* This function fetches the latest episodes from a website
  and stores them in an array. */
	static async fetchLatest(): Promise<void> {
		const data = await fetcher("https://neko.ketsuna.com", "text");
		const parsedData = /var lastEpisodes = (.+)\;/gm.exec(data);

		let latestEpisodes: LatestEpisode[] = [];
		if (parsedData) latestEpisodes = JSON.parse(parsedData[1]);

		this.latest = latestEpisodes.map(({ url_bg, url_image, ...episode }) => {
			return {
				...episode,
				url_image: buildProxiedUrl("https://neko.ketsuna.com" + url_image.replace("https://neko-sama.fr", "")),
				url_bg: buildProxiedUrl("https://neko.ketsuna.com" + url_bg.replace("https://neko-sama.fr", "")),
			};
		});
	}

	/* This function converts a string representing an episode
  number to a number data type in TypeScript. */
	static episodeToNumber(episode: string) {
		return Number(episode.replace("Ep. ", ""));
	}

	/**
	 *
	 * This function will ask first kitsu.io for the Anime Information (Get the name of the serie and prepend it to the episode title)
	 */
	private static async getKitsuIDFromTitle(title: string): Promise<string> {
		const kitsuUrl = `https://kitsu.io/api/edge/anime?filter[text]=${title}`;

		let kitsuAnime: Kitsu["data"][0] | undefined;
		const kitsuData = await fetcher<Kitsu>(kitsuUrl);

		if (kitsuData.data.length > 0) {
			kitsuAnime = kitsuData.data[0];
		}
		console.log(kitsuAnime.id);
		return kitsuAnime.id;
	}

	private static fetchNekoAnimeFromKitsu({ attributes }: Daum): Anime {
		let animes = [...this.vostfr];

		// filter anime list by years
		const year = new Date(attributes.startDate).getFullYear();
		animes = animes.filter(
			(a) =>
				a.start_date_year === `${year}` && a.type.toLowerCase().replace("m0v1e", "movie") === attributes.showType.toLowerCase(),
		);

		// fuzzy search in others
		const options = {
			includeScore: false,
			keys: ["others", "title"],
		};

		const fuse = new Fuse(animes, options);
		const [result] = fuse.search(attributes.canonicalTitle);

		return result?.item;
	}

	private static async fetchAnimeRelations(id: number, withRelation: boolean): Promise<{ prequelID: number; sequelID: number; relationsID: string[] }> {
		let { data: animeRelations } = await fetcher(
			`https://kitsu.io/api/edge/media-relationships?filter%5Bsource_id%5D=${id}&filter%5Bsource_type%5D=Anime&include=destination&sort=role`,
		);
		animeRelations = animeRelations.filter((a) => a.relationships.destination.data.type == "anime");

		const prequelID = animeRelations.find((a) => a.attributes.role == "prequel")?.relationships.destination.data.id;
		const sequelID = animeRelations.find((a) => a.attributes.role == "sequel")?.relationships.destination.data.id;
		const relationsID = animeRelations.map((a) => a.relationships.destination.data.id).filter((a) => a !== prequelID && a !== sequelID);

		if(prequelID && withRelation) await this.saveKitsuAnime(parseInt(prequelID),false);
		if(sequelID && withRelation) await this.saveKitsuAnime(parseInt(sequelID),false);
		for(const relationID of relationsID){
			if(relationID && withRelation) await this.saveKitsuAnime(parseInt(relationID),false);
		}

		return { prequelID: prequelID ? parseInt(prequelID) : null, sequelID: sequelID ? parseInt(sequelID) : null, relationsID };
	}

	private static async fetchKitsuAnime(id: number): Promise<Daum> {
		const { data: kitsuAnime } = await fetcher<KitsuAnime>(`https://kitsu.io/api/edge/anime/${id}`);
		return kitsuAnime;
	}

	/**
	 * This function will ask kitsu.io based on the anime id to get the Anime Information
	 */
	private static async saveKitsuAnime(id: number, withRelation: boolean = true) {
		// we need to check if the anime is already in the database
		let animeInDatabase = await prisma.anime.findFirst({
			where: {
				dataToFetch: {
					kitsuId: id,
				},
			},
			include: {
				dataToFetch: true,
			},
		});

		if(animeInDatabase?.status === "finished"){
			this.fetchAnimeRelations(id, withRelation);
			return animeInDatabase;
		}

		const kitsuAnime = await this.fetchKitsuAnime(id);
		const nekoAnime = this.fetchNekoAnimeFromKitsu(kitsuAnime);
		if(!nekoAnime) return;
		animeInDatabase = await prisma.anime.findFirst({
			where: {
				nekoId: nekoAnime.id,
			},
			include: {
				dataToFetch: true,
			},
		});
		if (!animeInDatabase) return;

		const { prequelID, sequelID, relationsID } = await this.fetchAnimeRelations(id, withRelation);
		const dataToUpdate: Prisma.AnimeUpdateInput = {
			episodesCount: kitsuAnime.attributes.episodeCount ?? 0,
			status: kitsuAnime.attributes.status,
			animeType: kitsuAnime.attributes.showType,
			synopsis: "",
			genres: [],
			titleEn: kitsuAnime.attributes.canonicalTitle,
			titleEnJp: kitsuAnime.attributes.titles.en_jp,
			titleFr: kitsuAnime.attributes.titles?.en ?? kitsuAnime.attributes.titles.en_jp,
			titleJp: kitsuAnime.attributes.titles.ja_jp,
			youtubeTrailerId: kitsuAnime.attributes.youtubeVideoId,
			clearLogoTitle: "",
			others: kitsuAnime.attributes.abbreviatedTitles,
			poster: kitsuAnime.attributes.posterImage?.original,
			background: kitsuAnime.attributes.coverImage?.original,
			banner: kitsuAnime.attributes.coverImage?.original,
			startDate: new Date(kitsuAnime.attributes.startDate),
			endDate: kitsuAnime.attributes.endDate ? new Date(kitsuAnime.attributes.endDate) : null,
			nextEpisodeDate: null,

			prequel_id: prequelID,
			sequel_id: sequelID,
			relations_ids: relationsID.map(parseInt).filter((a) => isNaN(a) === false),
		};

		if(!animeInDatabase.dataToFetch?.kitsuId){
			dataToUpdate.dataToFetch = {
				create: {
					kitsuId: parseInt(kitsuAnime.id),
				},
			}
		}
		return await prisma.anime.update({
			where: {
				nekoId: nekoAnime.id,
			},
			include: {
				dataToFetch: true,
			},
			data: dataToUpdate
		});
	}

	/* This function retrieves information about an anime based on
  its ID and language, including its synopsis, cover image URL,
  and episodes. */
	static async get(id: string, lang: "vf" | "vostfr") {
		const anime = this[lang].find((anime) => anime.id.toString() == id);
		if (!anime) return Promise.resolve(undefined);
		let animeDb = await prisma.anime.findFirst({
			where: {
				nekoId: parseInt(id),
			},
			include: {
				dataToFetch: true,
			},
		});
		let idKitsu = animeDb?.dataToFetch?.kitsuId;
		if(!idKitsu){
			idKitsu = parseInt(await this.getKitsuIDFromTitle(anime.title));
		}
		animeDb = await this.saveKitsuAnime(idKitsu);

		const animeHtml = await fetcher(`https://neko.ketsuna.com/${anime.url.replace("https://neko-sama.fr/", "")}`, "xml");
		const episodes = animeHtml(".episodes .col-xs-12")
			.map((i, el) => {
				const episode = load(el);
				const episodeNumber = episode("a").text().trimEnd().split(" - ");
				return {
					title: episode("a").text().trimEnd().trimStart(),
					num: this.episodeToNumber(episodeNumber[episodeNumber.length - 1]),
					url: episode("a").attr("href") as string,
					time: "24:00",
					// to get the correct episode number we need to extract this from the text : "title - 01 VOSTFR - 01" // here we need to extract the last number
					episode: this.episodeToNumber(episodeNumber[episodeNumber.length - 1]).toString(),
					url_image: animeDb?.poster,
					m3u8: "",
				};
			})
			.get()
			.reverse();
			const { prequel_id, sequel_id, ...animeFull } = animeDb;
		return {
			...animeFull,
			previous: prequel_id && (await prisma.anime.findFirst({
				where: {
					dataToFetch: {
						kitsuId: prequel_id
					},
				},
				select: {
					nekoId: true,
				},
			}))?.nekoId,
			next: sequel_id && (await prisma.anime.findFirst({
				where: {
					dataToFetch: {
						kitsuId: sequel_id
					},
				},
				select: {
					nekoId: true,
				},
			}))?.nekoId,
			episodes,
		};
	}

	/* This function retrieves the video URL and subtitle data for a given episode URL. */
	static async getEpisodeVideo(
		episode: Episode,
	): Promise<undefined | { uri: string; subtitlesVtt: Subtitlesvtt[]; baseUrl: string }> {
		return new Promise(async (resolve) => {
			try {
				const episodeUrl = "https://neko.ketsuna.com" + episode.url.replace("https://neko-sama.fr", "");
				const nekoData = await fetcher(episodeUrl, "text");
				const pstreamUrl = /(\n(.*)video\[0] = ')(.*)(';)/gm.exec(nekoData)?.[3] as string;
				if (!pstreamUrl) return resolve(undefined);
				const pstreamData = await fetcher(`https://proxy.ketsuna.com/?url=${encodeURIComponent(pstreamUrl)}`, "text");
				const baseurl = pstreamUrl.split("/").slice(0, 3).join("/");
				const loadedHTML = load(pstreamData);
				const scripts = loadedHTML("script");
				const scriptsSrc = scripts.map((i, el) => loadedHTML(el).attr("src")).get();
				let m3u8Url: string = "",
					subtitlesvtt: Subtitlesvtt[] = [];
				for (const scriptSrc of scriptsSrc) {
					if (scriptSrc.includes("cloudflare-static")) continue;
					const pstreamScript = await fetcher(`https://proxy.gazes.fr/?url=${encodeURIComponent(scriptSrc)}`, "text");
					let m3u8UrlB64 = /e.parseJSON\(atob\(t\).slice\(2\)\)\}\(\"([^;]*)"\),/gm.exec(pstreamScript)?.[1] as string;
					if (m3u8UrlB64) {
						const b64 = JSON.parse(atob(m3u8UrlB64).slice(2));
						const pstream: PstreamData = b64;
						m3u8Url = Object.values(pstream).find((data: any) => typeof data === "string" && data.includes(".m3u8")) as string;
						subtitlesvtt = pstream.subtitlesvtt;
						break;
					} else {
						m3u8UrlB64 = /e.parseJSON\(n\)}\(\"([^;]*)"\),/gm.exec(pstreamScript)?.[1] as string;
						if (m3u8UrlB64) {
							const b64 = JSON.parse(atob(m3u8UrlB64).slice(2));
							const pstream: PstreamData = b64;
							m3u8Url = Object.values(pstream).find((data: any) => typeof data === "string" && data.includes(".m3u8")) as string;
							subtitlesvtt = pstream.subtitlesvtt;
							break;
						} else {
							m3u8UrlB64 = /n=atob\("([^"]+)"/gm.exec(pstreamScript)?.[1] as string;
							if (m3u8UrlB64) {
								const b64 = JSON.parse(
									atob(m3u8UrlB64)
										.replace(/\|\|\|/, "")
										.slice(29),
								);
								const pstream: PstreamData = b64;
								m3u8Url = Object.values(pstream).find(
									(data: any) => typeof data === "string" && data.includes(".m3u8"),
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
}
