import { PrismaClient } from "@prisma/client";
import { updateAnimeNeko, updateAnimeSama } from "@utils/updateAnime";
const url = "https://discord.com/api/webhooks/1246823480150982686/JO6M8G8tefdQjbpV2ACJfAyoX7p2HwG_J6ZbMiDrwx1940jC3Vinnr5TY-TrSpHU89lz";
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

function sendErrorToDiscord(err) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: `Error: ${err.message}`,
            embeds: [
                {
                    title: "Error",
                    description: err.stack.slice(0, 3000),
                    color: 0xff0000,
                },
            ],
        }),
    });
}

process.on("unhandledRejection", (err) => {
    sendErrorToDiscord(err);
});

process.on("uncaughtException", (err) => {
    sendErrorToDiscord(err);
});

