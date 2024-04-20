import config from "@config";
import { AnimeNeko } from "../types/neko.type";
import { fetchType } from "./fetcher";


export default async function getDefaultAnimesInfo(): Promise<AnimeNeko[]>{
    return await fetchType<AnimeNeko[]>(config.nekoAnimeUrl, "json");
}
