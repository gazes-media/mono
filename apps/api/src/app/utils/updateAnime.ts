import { PrismaClient } from "@db/index";
import { constructUrlTrailer, delayedForEach } from "./functions";
import { getAnimeList } from "./animesama";
import { fetchAnimeByTitle } from "./anilist";
import getDefaultAnimesInfo from "./neko";

export async function updateAnimeSama(db: PrismaClient) {
    const check = await db.anime.findMany({
        where: {
            url_anime_sama: null
        },
        select: {
            url_anime_sama: true
        }
    })

    const animesFromSama = (await getAnimeList()).filter(e => !check.map(x => x.url_anime_sama).includes(e.url));
    // lookup in the database if it already in it

    delayedForEach(animesFromSama, (anime, index) => {

        fetchAnimeByTitle(anime.titleEn || anime.title).then(async (data) => {

            if (data) {
                await db.tags.createMany({
                    data: data.tags.map((tag) => {
                        return {
                            name: tag.name,
                            id: tag.id,
                        }
                    }),
                    skipDuplicates: true
                });
                await db.anime.upsert({
                    where: {
                        OR: [{
                            url_anime_sama: anime.url
                        }],
                        idMal: data.idMal
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
                        format: data.format,
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
                        Tags: {
                            createMany: {
                                data: data.tags.map((tag) => {
                                    return {
                                        rank: tag.rank,
                                        tagId: tag.id
                                    }
                                })
                            }
                        }
                    }
                });


            } else {
                db.anime.upsert({
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
                        trailer: null,
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
                        trailer: null,
                        status: "NOT_YET_RELEASED",
                    }
                });
            }
        });
    }, 1000);
}

export async function updateAnimeNeko(db: PrismaClient) {

    const check = await db.anime.findMany({
        where: {
            url_neko: null,
        },
        select: {
            url_neko: true
        }
    })
    const animesFromNeko = (await getDefaultAnimesInfo()).filter(e => check.map(x => x.url_neko).includes(e.url));

    delayedForEach(animesFromNeko, (anime, index) => {
        fetchAnimeByTitle(anime.title_english || anime.title_romanji || anime.title).then(async (data) => {
            if (data) {
                await db.tags.createMany({
                    data: data.tags.map((tag) => {
                        return {
                            name: tag.name,
                            id: tag.id,
                        }
                    }),
                    skipDuplicates: true
                });
                await db.anime.upsert({
                    where: {
                        idMal: data.idMal,
                        OR: [{
                            url_neko: anime.url
                        }]
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
                        format: data.format,
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
                        Tags: {
                            createMany: {
                                data: data.tags.map((tag) => {
                                    return {
                                        rank: tag.rank,
                                        tagId: tag.id
                                    }
                                })
                            }
                        }
                    }
                });
            } else {
                await db.anime.create({
                    data: {
                        url_neko: anime.url,
                        startDate: new Date(Number(anime.start_date_year), 0, 1),
                        status: anime.status == "1" ? "IN_PROGRESS" : "FINISHED",
                        synonyms: [anime.others],
                        coverImage: anime.url_image,
                        popularity: anime.popularity,
                        trailer: null,
                        format: "TV",
                        trending: Number(anime.score)
                    },
                })
            }
        });
    }, 1500);
}
