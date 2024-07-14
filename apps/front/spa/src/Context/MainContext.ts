import { createContext } from "react";
import { Anime, AnimeWatched, HighLighted } from "../utils/apiFetcher";

type StoreContextType = {
    trends: Anime[];
    setTrends: (trends: Anime[]) => void;
    animes: Anime[];
    setAnimes: (animes: Anime[]) => void;
    highlight: HighLighted|null;
    setHighlight: (highlight: HighLighted) => void;
    historyWatched: AnimeWatched[];
    setHistoryWatched: (historyWatched: AnimeWatched[]) => void;
}

export const StoreContext = createContext<StoreContextType>({
    trends: [],
    setTrends: () => {},
    animes: [],
    setAnimes: () => {},
    highlight: {} as HighLighted,
    setHighlight: () => {},
    historyWatched: [],
    setHistoryWatched: () => {}
});
