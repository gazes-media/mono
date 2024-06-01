import { load } from "cheerio";
import config from "../../config"
import { fetchType } from "./fetcher";
// @ts-ignore
const _ip ="https://81.17.18.98";
const url = config.animeSamaUrl;

const fetcher = async (url: string) => {
  const html = await fetchType<string>(url,"text")
  // try / catch the load
  return {
    $: load(html),
    html,
  }
};

interface Episode {
    title: string;
    link: string;
    data: string[];
}

export async function checkMainPage(){
    return new Promise<Episode[]>(async (resolve, reject) => {
        const {$}= await fetcher(url);
        const latestEpisodes: any[] = [];
        $("body div").each((index, element) => {
            $(element).find("div a").each((index, element) => {
                // we need to do a filter based on the h2 tag
                const asParent = $(element).parent();
                if(!asParent || asParent.length === 0 && asParent[0].name !== "div") return;

                const title = $(element).find("h1").text();
                const data = $(element).find("button").map((index, element) => $(element).text()).get();
                const image = $(element).find("img").attr("src");

                const link = $(element).attr("href");
                latestEpisodes.push({title, link,image, data});
            });
        })
        resolve(latestEpisodes.filter((episode) => episode.title !== ""));
    });
}

export async function getLatestEpisodes(){
   const episodes = await checkMainPage();
   return episodes.filter((episode) => episode.data.length > 0);
}

export async function getLatestAnime(){
    const episodes = await checkMainPage();
    return episodes.filter((episode) => episode.data.length == 0).map(({ data, ...eps}) => ({
        ...eps
    })).filter((episode, index, self) => self.findIndex((e) => e.title === episode.title) === index);
}

export async function getAnimeDetails(animeurl: string){
    return new Promise(async (resolve, reject) => {
        const {html, $ } = await fetcher(animeurl);
        const trailer = html.match(/\$\(document\)\.ready\(function\(\){\$\("#bandeannonce"\)\.attr\("src", "(.*)"\);}\);/)?.[1];
        const coverURL =  $("#coverOeuvre").attr("src");
        function getSaisons(data: string){
            let saisons = [];
             let datas = data.matchAll(/panneauAnime\("(.*)", "(.*)"\);/gm);
            for(const saison of datas){
                const [_, name, url] = saison;
                saisons.push({name, url: animeurl + url});
            }
            return saisons.filter((saison) => saison.name !== "nom")
        }
        const saisons = getSaisons(html);
        const synopsis = $("div .mx-3 p").map((index, element) => {
            return {
                text: $(element).text(),
                attr : $(element).attr("class")?.split(" ")
            }
        }).get().find((synopsis) => synopsis.attr && synopsis.attr.includes("mt-2"))?.text;
        const genres = $("div .mx-3 a").map((index, element) => {
            return {
                text: $(element).text(),
                attr : $(element).attr("class")?.split(" ")
            }
        }).get().find((synopsis) => synopsis.attr && synopsis.attr.includes("mt-2"))?.text.split(", ") || [];
        resolve({saisons});
    });
}

export async function getVideos(animeURL: string){
    return new Promise(async (resolve, reject) => {
        const {html} = await fetcher(animeURL+"/episodes.js");
        const videos = [];
        const datas = html.matchAll(/var\s*eps[0-9]+\s*\=\s*(\[(\s*\'[^']+\'\s*,?)+\s+\])\;/gm);
        let index = 0;
        for(const data of datas){
            const [_, links] = data;
            const linksArray = eval(links);
            videos.push({
                links: linksArray,
                source: index
            });
            index++;
        }
        resolve(videos);
    });

}

export async function getAnimeListByPage(page: number): Promise<Anime[]>{
    const {html, $} = await fetcher(`${url}/catalogue/index.php?page=${page}`);
    const animes = $(".cardListAnime").map((index, element) => {
        const genres = $(element).attr("class")?.split(" ")?.filter(e => e !== "cardListAnime" && e.length > 1) || [];
        const title = $(element).find("h1").text();
        const titleEn = $(element).find("p").text();
        const cover = $(element).find("img").attr("src");
        const url = $(element).find("a").attr("href");
        return {title, titleEn, cover, url, genres};
    }).get();
    return animes;
}

export async function getAnimeList(){
    let maxPage = 50;
    let animes:Anime[] = [];
    for(let i = 1; i <= maxPage; i++){
        const animeList = await getAnimeListByPage(i);
        animes = [...animes, ...animeList];
    }
    return animes;
}

type Anime = {
    title: string;
    titleEn: string;
    cover: string;
    url: string;
    genres: string[];
}
