import { FastifyInstance } from "fastify";
import { AppOptions } from "@src/index";

export default async function App(app: FastifyInstance, _opts: AppOptions) {
    app.get("/", async (request, reply) => {
        reply.status(200).send({ message: "API is working" });
    });
}
