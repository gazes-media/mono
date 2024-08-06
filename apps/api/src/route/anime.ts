import { AppOptions } from "../index";
import { FastifyInstance } from "fastify";
import { Prisma } from "@prisma/client";
import { fetchLatest, getAnime, getEpisodeVideo } from "../utils/animeStore";

type AnimesQuery = {
    type?: string;
    status?: string;
    genres?: string;
    year?: number;
    title?: string;
    page?: number;
    kitsuId?:string;
};

/**
 * @summary
 * This is the Anime Route Manager, every route related to the Anime are their
 *
 * @param app - The Fastify instance.
 * @param otherProperties - The properties that you passed to the Fastify instance.
 *
 * @returns void
 */
export async function Animes(app: FastifyInstance, opts: AppOptions) {

    app.get<{
        Querystring: AnimesQuery;
    }>("/", async (request, reply) => {
        // ![todo] Faire un Service à part pour la recherche et passer en fusySearch
        // récupérer les possible queries
        const { type, status, genres, year, title, page, kitsuId } = request.query;

        const filter: Prisma.AnimeWhereInput = {};

        if (type) {
            filter.animeType = {
                equals: type,
                mode: "insensitive"
            }
        }

        if(kitsuId){
            filter.dataToFetch = {
                kitsuId: parseInt(kitsuId)
            }
        }

        if (status) {
            filter.status = status;
        }

        if (genres) {
            // we need to manage if the genre start with "!". If it does, we need to exclude it from the search
            const genresSplitted = genres.split(",");

            const includeGenres = genresSplitted.filter((genre) => !genre.startsWith("!"));
            const excludeGenres = genresSplitted
                .filter((genre) => genre.startsWith("!"))
                .map((genre) => genre.slice(1));

            if (includeGenres.length > 0) {
                filter.genres = {
                    hasSome: includeGenres,
                };
            }

            if (excludeGenres.length > 0) {
                filter.NOT = {
                    genres: {
                        hasSome: excludeGenres,
                    },
                };
            }
        }

        if (year) {
            filter.startDate = {
                in: [new Date(year, 0, 1), new Date(year, 11, 31)]
            }
        }

        if (title) {
            filter.OR = [{
                titleFr: {
                    contains: title,
                    mode: 'insensitive'
                },
            }, {
                titleEn: {
                    contains: title,
                    mode: 'insensitive'
                },
            },
            {
                titleEnJp: {
                    contains: title,
                    mode: 'insensitive'
                }
            },
            {
                titleJp: {
                    contains: title,
                    mode: 'insensitive'
                }
            }]
        }


        const animes = await opts.prisma.anime.findMany({
            where: filter,
            skip: (page && page > 0 ? page : 0)*50,
            take: 50,
            select:{
                titleFr:true,
                animeType:true,
                poster:true,
                nekoId: true
            }
        })

        return reply.send({
            success: true,
            data: animes,
        });
    });

    app.get<{
        Params:{
            id: string
        }
    }>("/:id", async(request) =>{
        const { id } = request.params;
        if(Number.isNaN(id)) return {
            success: false,
            message: "id Need to be a Number"
        }
        const animeExist = await getAnime(opts.prisma,parseInt(id));
        if(!animeExist) return {
            success: false,
            message:"Anime Not Found"
        }

        return {
            success: true,
            data: animeExist
        }


    })

    app.get("/latest", async() => {
        return {
            success: true,
            data: await fetchLatest()
        }
    })

    app.get<{
        Params:{
            id: string;
            episodeId:string;
        }
    }>("/:id/episode/:episodeId", async(request) =>{
        const { episodeId, id } = request.params;
        if(Number.isNaN(id)) return {
            success: false,
            message: "id Need to be a Number"
        }

        if(Number.isNaN(episodeId)) return {
            success: false,
            message: "episodeId Need to be a Number"
        }
        const animeExist = await getAnime(opts.prisma,parseInt(id));
        if(!animeExist) return {
            status: false,
            message:"Anime Not Found"
        }
        const episodeNum = parseInt(episodeId)
        if((episodeNum-1) > animeExist.episodes.length || episodeNum < 1) return {
            status: false,
            message: "Episode is out of range"
        }

        return {
            success:true,
            data: await getEpisodeVideo(animeExist.episodes.at(episodeNum-1).url)
        }
    })
}
