import { PrismaClient } from "@prisma/client";
import { updateAnimeNeko, updateAnimeSama } from "@utils/updateAnime";
import { createClient } from "redis";

const prisma = new PrismaClient();

async function main(prisma) {
    await updateAnimeNeko(prisma).then(async () => {
        await updateAnimeSama(prisma).then(async () => {
            await prisma.anime.findMany();
        });
    });

    setInterval(async () => {
        await updateAnimeNeko(prisma).then(async () => {
            await updateAnimeSama(prisma).then(async () => {
            });
        });
    }, 3600000)

}

main(prisma).catch(e => console.error(e))
