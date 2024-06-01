import { Prisma, PrismaClient } from "@prisma/client";
import { constructUrlTrailer, delayedForEach } from "./functions";
import { getAnimeList } from "./animesama";
import { fetchAnimeByTitle } from "./anilist";
import getDefaultAnimesInfo from "./neko";

export async function updateAnimeSama(db: PrismaClient) {
    return new Promise(async (resolve, reject) => {
        const check = await db.anime.findMany({
            select: {
                url_anime_sama: true,
                anilist_id: true
            }
        })

        const animesFromSama = (await getAnimeList()).filter(e => !check.map(x => x.url_anime_sama).includes(e.url) || !check.map(x => x.anilist_id).includes(null));
        console.log(animesFromSama.length, "animesama");
        if (animesFromSama.length === 0) return resolve(true);
        // lookup in the database if it already in it

        delayedForEach(animesFromSama, async(anime, index) => {
            let data = null;
            let titledefault = anime.titleEn.length > 2 ? anime.titleEn : anime.title;
            let canBeFound = anime.titleEn.length > 2;
            let animeFound = fetchAnimeByTitle(titledefault);
            if (!animeFound) {
                if(canBeFound) animeFound = fetchAnimeByTitle(anime.title);
            }
            if(animeFound) data = animeFound;
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
                            OR: [{
                                anilist_id: data.id
                            },{
                                idMal: data.idMal
                            }]
                        }
                    })
                    try {
                        if (!checkIfAnimeExist) {

                            await db.anime.upsert({
                                where: {
                                    url_anime_sama: anime.url
                                },
                                update: {
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
                    await db.anime.upsert({
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
        }, 1500);
    })
}

export async function updateAnimeNeko(db: PrismaClient) {
    return new Promise(async (resolve, reject) => {
        const check = await db.anime.findMany({
            select: {
                url_neko: true,
                anilist_id: true
            }
        })
        const animeToFilter  = await getDefaultAnimesInfo();
        if(!Array.isArray(animeToFilter)) return resolve(true);
        const animesFromNeko = animeToFilter.filter(e => !check.map(x => x.url_neko).includes(e.url) && !check.map(x => x.anilist_id).includes(null));
        console.log(animesFromNeko.length, "neko");
        if (animesFromNeko.length === 0) return resolve(true);
        delayedForEach(animesFromNeko,async(anime, index) => {
            let animeFound = await fetchAnimeByTitle(anime.title_romanji);
            let data = null;
            if (!animeFound){
                animeFound = await fetchAnimeByTitle(anime.title_english);
            }
            if(animeFound) data = animeFound;

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
                            OR: [{
                                anilist_id: data.id
                            },{
                                idMal: data.idMal
                            }]
                        }
                    })

                    try {
                        if (!checkIfAnimeExist) {
                            await db.anime.upsert({
                                where: {
                                    url_neko: anime.url
                                },
                                update: {
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
                                    url_neko: anime.url,
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
                                    url_neko: anime.url,
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
                            title: anime.title,
                            titleenglish: anime.title_english,
                            titleromanji: anime.title_romanji,
                            genres: anime.genres,
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
        }, 2000);
    });
}
