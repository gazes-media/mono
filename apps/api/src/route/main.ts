import { AppOptions } from "../index";
import { FastifyInstance } from "fastify";
import * as routes from "./index";
import { fetchAll } from "../utils/animeStore";
/**
 * @summary
 * This is the main entry point for your application.
 *
 * @param app - The Fastify instance.
 * @param otherProperties - The properties that you passed to the Fastify instance.
 *
 * @returns void
 */
export default async function App(app: FastifyInstance, opts: AppOptions) {

    await fetchAll(opts.prisma).then((result) => console.log(`${result.count} Anime Added`));
    for(const route of Object.entries(routes)){
        console.log(route[0]);
        await app.register(async(apps) => {
            return await route[1](apps, opts)
        }, {
            prefix: route[0].toLowerCase(),
        });
    }

    const fetchInterval = () => fetchAll(opts.prisma).then((result) => console.log(`${result.count} Anime Added`));

    setInterval(fetchInterval,600000);

    app.get("/", async () => {
        // let's calc the time before the request and after the send of the response
        console.log(opts);
        const start = Date.now();
        return {
            pong: start - Date.now(),
        }
    });
    console.log(app.printRoutes());
}
