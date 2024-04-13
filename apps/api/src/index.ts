import admin from "firebase-admin";
import fastify, { FastifyPluginOptions} from "fastify";
import { PrismaClient } from "@db/index";
import App from "@src/app";

const prisma = new PrismaClient();

const app = fastify();
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
};

app.register(async (app, opts) => {
    await App(app, { ...opts, prisma, firebaseAdmin: admin });
});

app.listen({
    host: "0.0.0.0",
    port: 5300,
}, () => {
    console.log(`Server running on http://localhost:5300`);
});
