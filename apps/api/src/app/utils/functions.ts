import { Trailer } from "../types/anilist.type";

export function delayedForEach<T>(array: T[], func: (item: T, index: number) => void, duration: number): void {
    array.forEach((item, index) => {
        setTimeout(() => {
            func(item, index);
        }, index * duration);
    });
}

export function constructUrlTrailer(trailer: Trailer) {
        if (!trailer) return "";
        if (trailer.site === "youtube") {
            return `https://www.youtube.com/watch?v=${trailer.id}`;
        } else {
            // daily motion
            return `https://www.dailymotion.com/video/${trailer.id}`;
        }
    }

export function chunkifyArray<T>(arr: T[], size: number): T[][]{
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
