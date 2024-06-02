import { PrismaClient } from "@prisma/client";
import { updateAnimeNeko, updateAnimeSama } from "@utils/updateAnime";
import { createClient } from "redis";

const prisma = new PrismaClient();
const redis = createClient({
    socket: {
        host: "89.234.183.191",
        port: 6379
    }
});

async function main(prisma) {
    await updateAnimeNeko(prisma).then(async () => {
        const animesToSave = await prisma.anime.findMany();
        redis.set("animes", JSON.stringify(animesToSave));
        await updateAnimeSama(prisma).then(async () => {
            const animeToUpdate = await prisma.anime.findMany();
            redis.set("animes", JSON.stringify(animeToUpdate));
        });
    });

    setInterval(async () => {
        await updateAnimeNeko(prisma).then(async () => {
            await updateAnimeSama(prisma).then(async () => {
                const animeToUpdate = await prisma.anime.findMany();
                redis.set("animes", JSON.stringify(animeToUpdate));
            });
        });
    }, 3600000)

}

main(prisma).catch(e => console.error(e))
