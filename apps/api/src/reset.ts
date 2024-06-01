import { PrismaClient } from '@prisma/client';

export default async function reset(prisma: PrismaClient) {
    await prisma.anime.deleteMany();
    await prisma.episode.deleteMany();
    await prisma.tagsByAnime.deleteMany();
    await prisma.tags.deleteMany();
    await prisma.user.deleteMany();
    console.log("Database reseted");
}

