import { FastifyInstance } from "fastify";
import { AppOptions } from "@root";
import * as routes from "@app/routes";
import { updateAnimeNeko, updateAnimeSama } from "@utils/updateAnime";


// delayed forEach



export default async function App(app: FastifyInstance, opts: AppOptions) {

    app.get("/", async (request, reply) => {
        reply.status(200).send({ message: "API is working" });
    });

    for (const route of Object.values(routes)) {
        await route(app, opts);
    }

    console.log(app.printRoutes());
}
