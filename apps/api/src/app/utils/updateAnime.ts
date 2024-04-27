import { Prisma, PrismaClient } from "@db/index";
import { constructUrlTrailer, delayedForEach } from "./functions";
import { getAnimeList } from "./animesama";
import { fetchAnimeByTitle } from "./anilist";
import getDefaultAnimesInfo from "./neko";
import { data } from "cheerio/lib/api/attributes";

export async function updateAnimeSama(db: PrismaClient) {
    return new Promise(async (resolve, reject) => {
        const check = await db.anime.findMany({
            select: {
                url_anime_sama: true
            }
        })

        const animesFromSama = (await getAnimeList()).filter(e => !check.map(x => x.url_anime_sama).includes(e.url));
        console.log(animesFromSama.length, "animesama");
        if (animesFromSama.length === 0) return resolve(true);
        // lookup in the database if it already in it

        delayedForEach(animesFromSama, (anime, index) => {

            fetchAnimeByTitle(anime.titleEn.length > 2 ? anime.titleEn : anime.title).then(async (data) => {

                if (data != null) {
                    await db.tags.createMany({
                        data: data.tags.map((tag) => {
                            return {
                                name: tag.name,
                                id: tag.id,
                            }
                        }),
                        skipDuplicates: true
                    });

                    let checkIfAnimeExist = await db.anime.findFirst({
                        where: {
                            idMal: data.idMal,
                            OR: [{
                                anilist_id: data.id
                            }]
                        }
                    })
                    try {
                        if (!checkIfAnimeExist) {

                            await db.anime.upsert({
                                where: {
                                    idMal: data.idMal || 500000000
                                },
                                update: {
                                    url_anime_sama: anime.url
                                },
                                create: {
                                    title: data.title.native,
                                    titleenglish: data.title.english,
                                    idMal: data.idMal,
                                    anilist_id: data.id,
                                    description: data.description,
                                    episodes: data.episodes,
                                    duration: data.duration,
                                    genres: data.genres,
                                    coverImage: data.coverImage.large,
                                    bannerImage: data.bannerImage,
                                    startDate: new Date(data.startDate.year, data.startDate.month, data.startDate.day),
                                    status: data.status,
                                    trailer: constructUrlTrailer(data.trailer),
                                    endDate: data.endDate ? new Date(data.endDate.year, data.endDate.month, data.endDate.day) : null,
                                    synonyms: data.synonyms,
                                    url_anime_sama: anime.url,
                                    relations: data.relations.nodes.filter(e => e.type == "ANIME").map((relation) => {
                                        return relation.id;
                                    }),
                                    isAdult: data.isAdult,
                                    titleromanji: data.title.romaji,
                                    trending: data.trending,
                                    popularity: data.popularity,
                                    format: data.format,
                                    Tags: {
                                        createMany: {
                                            data: data.tags.map((tag) => {
                                                return {
                                                    rank: tag.rank,
                                                    tagId: tag.id
                                                }
                                            }),
                                            skipDuplicates: true
                                        }
                                    }
                                },
                            });
                        } else {
                            const animeToInsert: Prisma.AnimeUpdateInput = {

                            }

                            if (!checkIfAnimeExist?.url_anime_sama) {
                                animeToInsert.url_anime_sama = anime.url;
                            }
                            if (!checkIfAnimeExist?.anilist_id) {
                                animeToInsert.anilist_id = data.id;
                            }
                            await db.anime.update({
                                where: {
                                    Id: checkIfAnimeExist.Id
                                },
                                data: animeToInsert
                            })
                        }



                    } catch (e) {
                        console.log(e)
                    }

                } else {

                    const animeUpserted = await db.anime.upsert({
                        where: {
                            url_anime_sama: anime.url
                        },
                        create: {
                            title: anime.title,
                            titleenglish: anime.titleEn,
                            url_anime_sama: anime.url,
                            coverImage: anime.cover,
                            format: "TV",
                            genres: anime.genres,
                            startDate: new Date(Date.now()),
                            popularity: 0,
                            trending: 0,
                            trailer: "",
                            status: "NOT_YET_RELEASED",
                        },
                        update: {
                            title: anime.title,
                            titleenglish: anime.titleEn,
                            url_anime_sama: anime.url,
                            coverImage: anime.cover,
                            format: "TV",
                            genres: anime.genres,
                            startDate: new Date(Date.now()),
                            popularity: 0,
                            trending: 0,
                            trailer: "",
                            status: "NOT_YET_RELEASED",
                        }
                    });
                }
                if (animesFromSama.length + 1 === index) resolve(true);
            });
        }, 1000);
    })
}

export async function updateAnimeNeko(db: PrismaClient) {
    return new Promise(async (resolve, reject) => {
        const check = await db.anime.findMany({
            select: {
                url_neko: true
            }
        })
        const animesFromNeko = (await getDefaultAnimesInfo()).filter(e => !check.map(x => x.url_neko).includes(e.url));
        console.log(animesFromNeko.length, "neko");
        if (animesFromNeko.length === 0) return resolve(true);
        delayedForEach(animesFromNeko, (anime, index) => {
            fetchAnimeByTitle(anime.title_english || anime.title_romanji || anime.title).then(async (data) => {
                if (data != null) {
                    await db.tags.createMany({
                        data: data.tags.map((tag) => {
                            return {
                                name: tag.name,
                                id: tag.id,
                            }
                        }),
                        skipDuplicates: true
                    });

                    const checkIfAnimeExist = await db.anime.findFirst({
                        where: {
                            idMal: data.idMal,
                            OR: [{
                                anilist_id: data.id
                            }]
                        }
                    })

                    try {
                        if (!checkIfAnimeExist) {
                            await db.anime.create({
                                data: {
                                    title: data.title.native,
                                    titleenglish: data.title.english,
                                    idMal: data.idMal,
                                    anilist_id: data.id,
                                    description: data.description,
                                    episodes: data.episodes,
                                    duration: data.duration,
                                    genres: data.genres,
                                    coverImage: data.coverImage.large,
                                    bannerImage: data.bannerImage,
                                    startDate: new Date(data.startDate.year, data.startDate.month, data.startDate.day),
                                    status: data.status,
                                    trailer: constructUrlTrailer(data.trailer),
                                    endDate: data.endDate ? new Date(data.endDate.year, data.endDate.month, data.endDate.day) : null,
                                    synonyms: data.synonyms,
                                    url_anime_sama: anime.url,
                                    relations: data.relations.nodes.filter(e => e.type == "ANIME").map((relation) => {
                                        return relation.id;
                                    }),
                                    isAdult: data.isAdult,
                                    titleromanji: data.title.romaji,
                                    trending: data.trending,
                                    popularity: data.popularity,
                                    format: data.format,
                                    Tags: {
                                        createMany: {
                                            data: data.tags.map((tag) => {
                                                return {
                                                    rank: tag.rank,
                                                    tagId: tag.id
                                                }
                                            }),
                                            skipDuplicates: true
                                        }
                                    }
                                },
                            });
                        } else {
                            const animeToInsert: Prisma.AnimeUpdateInput = {
                                anilist_id: data.id
                            }
                            if (!checkIfAnimeExist?.url_neko) {
                                animeToInsert.url_neko = anime.url;
                            }

                            if (!checkIfAnimeExist?.anilist_id) {
                                animeToInsert.anilist_id
                            }
                            await db.anime.update({
                                where: {
                                    Id: checkIfAnimeExist.Id
                                },
                                data: animeToInsert
                            })
                        }


                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    await db.anime.create({
                        data: {
                            url_neko: anime.url,
                            startDate: new Date(Number(anime.start_date_year), 0, 1),
                            status: anime.status == "1" ? "IN_PROGRESS" : "FINISHED",
                            synonyms: [anime.others],
                            coverImage: anime.url_image,
                            popularity: anime.popularity,
                            trailer: "",
                            format: "TV",
                            trending: Number(anime.score)
                        },
                    })
                }
                if ((animesFromNeko.length - 1) === index) resolve(true);
            });
        }, 1500);
    });
}
