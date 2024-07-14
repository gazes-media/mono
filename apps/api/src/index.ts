import admin from "firebase-admin";
import { GazeApi } from "./GazeApi";
import { AuthMiddleware } from "./middleware/Auth.middleware";
import * as Router from "./route/Index.route";
import dotenv from "dotenv";
dotenv.config();

const gazeApi = new GazeApi();
const RouterIndex = Object.values(Router);

gazeApi.handleRoutes(RouterIndex);
gazeApi.handleMiddleware([AuthMiddleware]);

gazeApi.fastify.addHook("onReady", () => {
    console.log("⚡ ready to use");
});

admin.initializeApp({
    credential: admin.credential.cert({
        clientEmail: "firebase-adminsdk-xvjq7@animaflix-53e15.iam.gserviceaccount.com",
        privateKey:process.env.FIREBASE_PRIVATE_KEY,
        projectId: "animaflix-53e15",
    }),

    databaseURL: "https://animaflix-53e15-default-rtdb.europe-west1.firebasedatabase.app",
});

process.addListener("unhandledRejection", (reason, promise) => {
    console.error("unhandledRejection", reason, promise);
});

process.addListener("uncaughtException", (error) => {
    console.error("uncaughtException", error);
});

gazeApi.fastify.addHook("onClose", async () => {
    admin.app().delete();
    process.exit(0);
});

gazeApi.fastify.addHook("onError", async (request, reply, error) => {
    console.error(error);
});

gazeApi.start(Number(process.env.PORT) || 5300);
