import { FastifyInstance } from "fastify";
import { AppOptions } from "@root";
import * as routes from "@app/routes";
import getDefaultAnimesInfo from "@utils/neko";
import { fetchAnimeByTitle } from "@utils/anilist";

// delayed forEach

function delayedForEach<T>(array: T[], func: (item: T, index: number) => void, duration: number): void {
    array.forEach((item, index) => {
        setTimeout(() => {
            func(item, index);
        }, index * duration);
    });
}

export default async function App(app: FastifyInstance, opts: AppOptions) {

    app.get("/", async (request, reply) => {
        reply.status(200).send({ message: "API is working" });
    });

    for (const route of Object.values(routes)) {
        await route(app, opts);
    }

    console.log(app.printRoutes());
}
