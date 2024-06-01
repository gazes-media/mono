import admin from "firebase-admin";
import fastify, { FastifyPluginOptions} from "fastify";
import { PrismaClient } from "@prisma/client";
import App from "@app/index";
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { createClient} from "redis"
import dotenv from "dotenv";
import { updateAnimeNeko, updateAnimeSama } from "@utils/updateAnime";
dotenv.config();
const prisma = new PrismaClient();
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

const app = fastify().withTypeProvider<TypeBoxTypeProvider>()
admin.initializeApp({
    credential: admin.credential.cert({
        clientEmail: "firebase-adminsdk-xvjq7@animaflix-53e15.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: "animaflix-53e15",
    }),
    databaseURL: "https://animaflix-53e15-default-rtdb.europe-west1.firebasedatabase.app",
})

export type AppOptions = FastifyPluginOptions & {
    prisma: PrismaClient;
    firebaseAdmin: typeof admin;
    redis: typeof redis;
};

app.register(async (app, opts) => {
    await App(app, { ...opts, prisma, firebaseAdmin: admin, redis });
});

app.listen({
    host: "0.0.0.0",
    port: 5300,
}, async() => {
    console.log(`Server running on http://localhost:5300`);
    // const animesToSave = await prisma.anime.findMany();
    await updateAnimeNeko(prisma).then(async() => {
        console.log("Update in progress")
    });
    // redis.set("animes",JSON.stringify(animesToSave));
    // setInterval(async() => {
    //     await updateAnimeNeko(prisma)
    //     await updateAnimeSama(prisma)
    //     const animeToUpdate = await prisma.anime.findMany();
    //     redis.set("animes",JSON.stringify(animeToUpdate));
    // }, 3600000)
});
