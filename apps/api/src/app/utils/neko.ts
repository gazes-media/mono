import config from "@config";
import { AnimeNeko } from "../types/neko.type";
import { fetchType } from "./fetcher";
import { Episode } from "@db/index";
import { load } from "cheerio";


export default async function getDefaultAnimesInfo(): Promise<AnimeNeko[]>{
    return await fetchType<AnimeNeko[]>(config.nekoAnimeUrl, "json");
}

export async function getEpisodes(url: string): Promise<Episode[]>{
    const data = await fetchType<string>(config.nekoSamaUrl + url, "text");
    return extractEpisodes(data)
}

function extractEpisodes(html: string): Episode[] {
		const episodesMatch = html.match(/var episodes = (\[.*?\]);/s);
		if (!episodesMatch) return [];

		try {
			const episodes = JSON.parse(episodesMatch[1]) as Episode[];
			return episodes;
		} catch (e) {
			console.error("Error parsing episodes JSON:", e);
			return [];
		}
	}

export async function getEpisodeVideo(episode: Episode): Promise<undefined | string> {
        return new Promise(async (resolve) => {
            const episodeUrl = "https://neko.ketsuna.com" + episode.url;
            const  nekoData= await fetchType<string>(episodeUrl);
            const pstreamUrl = /(\n(.*)video\[0] = ')(.*)(';)/gm.exec(nekoData)?.[3] as string;
            if (!pstreamUrl) return resolve(undefined);
            const pstreamData = await fetchType<string>(`https://proxy.ketsuna.com/?url=${encodeURIComponent(pstreamUrl)}`);
            const baseurl = pstreamUrl.split("/").slice(0, 3).join("/");
            const loadedHTML = load(pstreamData);
            const scripts = loadedHTML("script");
            const scriptsSrc = scripts.map((i, el) => loadedHTML(el).attr("src")).get();
            let m3u8Url: string = "",
                subtitlesvtt: any[] = [];
            for (const scriptSrc of scriptsSrc) {
                if (scriptSrc.includes("cloudflare-static")) continue;
                const  pstreamScript = await fetchType<string>(`https://proxy.ketsuna.com/?url=${encodeURIComponent(scriptSrc)}`);
                let m3u8UrlB64 = /e.parseJSON\(atob\(t\).slice\(2\)\)\}\(\"([^;]*)"\),/gm.exec(pstreamScript)?.[1] as string;
                if (m3u8UrlB64) {
                    const b64 = JSON.parse(atob(m3u8UrlB64).slice(2));
                    const pstream = b64;
                    m3u8Url = Object.values(pstream).find((data: any) => typeof data === "string" && data.includes(".m3u8")) as string;
                    subtitlesvtt = pstream.subtitlesvtt;
                    break;
                } else {
                    m3u8UrlB64 = /e.parseJSON\(n\)}\(\"([^;]*)"\),/gm.exec(pstreamScript)?.[1] as string;
                    if (m3u8UrlB64) {
                        const b64 = JSON.parse(atob(m3u8UrlB64).slice(2));
                        const pstream = b64;
                        m3u8Url = Object.values(pstream).find((data: any) => typeof data === "string" && data.includes(".m3u8")) as string;
                        subtitlesvtt = pstream.subtitlesvtt;
                        break;
                    } else {
                        m3u8UrlB64 = /n=atob\("([^"]+)"/gm.exec(pstreamScript)?.[1] as string;
                        if (m3u8UrlB64) {
                            const b64 = JSON.parse(
                                atob(m3u8UrlB64)
                                    .replace(/\|\|\|/, "")
                                    .slice(29),
                            );
                            const pstream = b64;
                            m3u8Url = Object.values(pstream).find((data: any) => typeof data === "string" && data.includes(".m3u8")) as string;
                            subtitlesvtt = pstream.subtitlesvtt;
                            break;
                        }
                    }
                }
            }
            if (m3u8Url !== "") {
                resolve(new URL("?url="+encodeURIComponent(m3u8Url),config.proxy).toString());
            } else {
                resolve(undefined);
            }
        });
    }
