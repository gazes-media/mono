import fastify, { FastifyPluginOptions} from "fastify";
import { PrismaClient } from "@prisma/client";
import App from "@app/index";
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { createClient} from "redis"
import dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient({
    log: ["query", "info", "warn","error"]
});
const redis = createClient({
    socket:{
        host: "89.234.183.191",
        port: 6379
    }
});
(async()=>{
    redis.connect();
    redis.on("error", (data) => console.log(data));
})();

const app = fastify({
    logger: true,
}).withTypeProvider<TypeBoxTypeProvider>()


export type AppOptions = FastifyPluginOptions & {
    prisma: PrismaClient;
    redis: typeof redis;
};

app.register(async (app, opts) => {
    await App(app, { ...opts, prisma, redis });
});

app.listen({
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 3002,
}, async(err,server) => {
    console.log("Server is running on : ", server);
    const animesToSave = await prisma.anime.findMany();
    redis.set("animes",JSON.stringify(animesToSave));

    setInterval(async () => {
        const animesToSave = await prisma.anime.findMany();
        redis.set("animes",JSON.stringify(animesToSave));
    }, 3600000)
});
