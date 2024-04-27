export interface AnimeNeko {
    id: number
    title: string
    title_english: string
    title_romanji?: string
    title_french?: string
    others: string
    type: string
    status: string
    popularity: number
    url: string
    genres: string[]
    url_image: string
    score: string
    start_date_year: string
    nb_eps: string
  }


export interface NekoEpisode {
  time: string
  episode: string
  num: number
  title: string
  url: string
  url_image: string
}
