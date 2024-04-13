import admin from "firebase-admin";
import fastify from "fastify";
import { PrismaClient } from "../db-client";

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

app.get("/", async (request, reply) => {
    reply.status(200).send({ message: prisma.user.fields });
});

app.listen({
    host: "0.0.0.0",
    port: 5300,
}, () => {
    console.log(`Server running on http://localhost:5300`);
});
