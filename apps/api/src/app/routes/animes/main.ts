import { FastifyInstance } from "fastify";
import { AppOptions } from "@root";
import { Anime, Episode } from "@prisma/client";
import { AnimeEpisodeParams, AnimeParams, AnimeParamsSchema, AnimeSearchQueryString } from "../../types/anime.type";
import { chunkifyArray } from "@utils/functions";
import { getEpisodeVideo, getEpisodes } from "@utils/neko";

export async function AnimeIndex(app: FastifyInstance, opts: AppOptions) {
    app.get<{
        Querystring: AnimeSearchQueryString
    }>("/animes",{
        schema: {
            querystring: AnimeSearchQueryString,
        },
    }, async (request, reply) => {

        const page= request.query.page && Number(request.query.page) > 0 ? Number(request.query.page) : 1;
        const containAnime = await opts.redis.get("animes");
        let animes: Anime[] = [];
        if(containAnime) animes = JSON.parse(containAnime) as Anime[];

        // we now will filter
        if(request.query.title) {
            animes = animes.filter(({ title, titleenglish, synonyms, titleromanji}) => {
                if(title?.toLowerCase().includes(request.query.title.toLowerCase())) return true;
                if(titleenglish && titleenglish?.toLowerCase().includes(request.query.title.toLowerCase())) return true;
                if(titleromanji && titleromanji?.toLowerCase().includes(request.query.title.toLowerCase())) return true;
                if(synonyms.length > 0 && synonyms.some(synonym => synonym.toLowerCase().includes(request.query.title.toLowerCase()))) return true;
                return false;
            });
        }

        if(request.query.genres) {
            const genresSeparated = request.query.genres.split(",");
            animes = animes.filter(({ genres }) => {
                if(!genres) return false;
                return genres.some(genre => genresSeparated.includes(genre.toLowerCase()));
            });
        }

        if(request.query.format) {
            animes = animes.filter(({ format }) => format?.toLowerCase() === request.query.format.toLowerCase());
        }

        if(request.query.status) {
            animes = animes.filter(({ status }) => status.toLowerCase() === request.query.status.toLowerCase());
        }

        if(request.query.episodes){
            animes = animes.filter(({ episodes}) => request.query.episodes == episodes);
        }
        animes = animes.sort((a,b) => a.popularity + b.popularity);
        // chunk the array
        let animesChunked = chunkifyArray(animes, 50);
        if(animesChunked.length !== 0 && page > animesChunked.length) return reply.status(404).send({ message: "Page not found" });
        if(animesChunked.length === 0) return reply.status(404).send({ message: "No animes found" });
        reply.status(200).send(animesChunked[page - 1]);

    });

    app.get<{
        Params: AnimeParams;
    }>("/animes/:id",{
        schema: {
            params: AnimeParamsSchema,
        },
    }, async (request, reply) => {
        const anime = await opts.prisma.anime.findUnique({
            where: {
                Id: Number(request.params.id),
            },
        });
        if(!anime) return reply.status(404).send({ message: "Anime not found" });
        reply.status(200).send(anime);
    });

    app.get<{
        Params: AnimeEpisodeParams;
    }>("/animes/:id/:episode",{
        schema: {
            params: AnimeEpisodeParams,
        },
    }, async (request, reply) => {
        const anime = await opts.prisma.anime.findUnique({
            where: {
                Id: Number(request.params.id),
            },
        });

        if(!anime) return reply.status(404).send({ message: "Anime not found" });
        const episodes: Episode[]= [];
        if(anime.url_neko) {
            const episodesNeko = await getEpisodes(anime.url_neko);
            episodes.push(...episodesNeko);
        }
        if(episodes.length === 0) return reply.status(404).send({ message: "Episodes not found" })
        if(request.params.episode > episodes.length || request.params.episode < 1) return reply.status(404).send({
            message: "The episode is not found"
        })

        const vostfr=  await getEpisodeVideo(episodes[request.params.episode-1]);
        const vf = await getEpisodeVideo(episodes[request.params.episode-1],true)
        reply.status(200).send({
            vf,vostfr
        });
    });
}
