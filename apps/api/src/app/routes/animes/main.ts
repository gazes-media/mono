import { FastifyInstance } from "fastify";
import { AppOptions } from "@src/index";
import { fetchAnimeByTitle } from "@src/app/utils/anilist";

export async function AnimeIndex(app: FastifyInstance, opts: AppOptions) {
    app.get("/animes", async (request, reply) => {
        const anime = await fetchAnimeByTitle("frieren");
        reply.status(200).send(anime);
    });
}
