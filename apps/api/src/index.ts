import admin from "firebase-admin";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import fastify, { FastifyPluginOptions } from "fastify";
import App from "./route/main";
dotenv.config();

const server = fastify({
	logger: false,
});

const prisma = new PrismaClient({
	log:["error","warn","info"]
});

admin.initializeApp({
	credential: admin.credential.cert({
		clientEmail:
			"firebase-adminsdk-xvjq7@animaflix-53e15.iam.gserviceaccount.com",
		privateKey: process.env.FIREBASE_PRIVATE_KEY,
		projectId: "animaflix-53e15",
	}),

	databaseURL:
		"https://animaflix-53e15-default-rtdb.europe-west1.firebasedatabase.app",
});
interface AppOptionsModify {
	prisma: PrismaClient;
	admin: typeof admin;
}
export type AppOptions = AppOptionsModify & FastifyPluginOptions;



server.addHook("onClose", async () => {
	await prisma.$disconnect();
	await admin.app().delete();
	process.exit(0);
});

server.addHook("onError", (error) => server.log.error(error));
server.addHook("onReady", async () => {
	await prisma.$connect();
	server.log.info("Server is ready to accept connections");
});


server.register(async (app, opts) => {
	await App(app, {
		admin: admin,
		prisma: prisma,
		...opts,
	});
})

process.addListener("unhandledRejection", (reason, promise) => {
	console.log(reason, promise);
});

process.addListener("uncaughtException", (error) => {
	server.log.error("uncaughtException", error);
});

server.listen({
	host: "0.0.0.0",
	port: Number(process.env.PORT) || 5300,
});
