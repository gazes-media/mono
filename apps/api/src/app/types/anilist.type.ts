export interface Root {
    data: Data
}

export interface Data {
    Media: Media
}

export interface Media {
    id: number
    nextAiringEpisode: NextAiringEpisode
    title: Title
    format: string
    status: string
    description: string
    startDate: StartDate
    endDate: EndDate
    tags: Tag[]
    episodes: number
    duration: number
    trailer: Trailer
    updatedAt: number
    coverImage: CoverImage
    relations: Relations
    bannerImage: string
    genres: string[]
    synonyms: string[]
    popularity: number
    trending: number
    isAdult: boolean
    idMal: number
}


export interface NextAiringEpisode {
    episode: number
    airingAt: number
    timeUntilAiring: number
}

export interface Title {
    romaji: string
    english: string
    native: string
}

export interface StartDate {
    year: number
    month: number
    day: number
}

export interface EndDate {
    year: any
    month: any
    day: any
}

export interface Tag {
    name: string
    rank: number
}

export interface Trailer {
    id: string
    site: string
    thumbnail: string
}

export interface CoverImage {
    extraLarge: string
    large: string
    medium: string
    color: string
}

export interface Relations {
    nodes: Node[]
}

export interface Node {
    id: number
    type: string
}
