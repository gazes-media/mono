
import { HTTPMethods, RouteHandlerMethod } from "fastify";
import Fuse from "fuse.js";
import { Anime } from "../../interfaces/anime.interface";
import { AnimeStore } from "../../store/animes.store";
import { Route } from "../Route";

type AnimesQuery = {
  types?: string;
  status?: string;
  genres?: string;
  year?: string;
  title?: string;
  page?: number;
};

export class AnimesRoute extends Route {
  public url = "/animes";
  public method: HTTPMethods = "GET";

  public handler: RouteHandlerMethod = (request, reply) => {
    // récupérer les possible queries
    const { types, status, genres, year, title, page }: AnimesQuery = Object.fromEntries(Object.entries(request.query).map(([key, value]) => [key, value?.toLowerCase()]));

    let animes = AnimeStore.vostfr;

    /**
     * The function filters an array of anime objects based on various criteria such as type, language,
     * status, genres, and years.
     */
    function animesFilter(a: Anime) {
      let toreturn = true;

      if (types && !types.split(",").includes(a.type.toString())) toreturn = false;
      if (status && a.status !== status) toreturn = false;

      if (genres) {
        let animeGenres = a.genres.map((g) => g.toLowerCase());
        const genresArray = genres.split(",");

        for (const genre of genresArray) {
          if (genre.startsWith("!")) {
            if (animeGenres.includes(genre.substring(1))) {
              toreturn = false;
              break;
            }
          } else {
            if (!animeGenres.includes(genre)) {
              toreturn = false;
              break;
            }
          }
        }
      }

      if (year && !year.includes(a.start_date_year.toString())) toreturn = false;
      return toreturn;
    }

    animes = animes.filter(animesFilter);

    /**
     * The function `titleFilter` takes an `Anime` object and a `title` string as input, and returns
     * `true` if any of the titles in the `Anime` object (including English, French, Romanji, and
     * others) contain the `title` string (case-insensitive), otherwise it returns `false`.
     */
    if (title) {
      const fuse = new Fuse(animes, {
        keys: ["title", "title_english", "title_romanji", "title_french"],
        includeScore: false,
      });

      animes = fuse.search(title).map((a) => a.item);
    }

    if (animes.length <= 0) {
      return reply.status(404).send({
        success: false,
        message: "La requête a été traitée avec succès, mais aucun contenu n'est disponible pour la réponse demandée.",
      });
    }

    if (page) {
      const perPage = 20;
      const start = (page - 1) * perPage;
      const end = start + perPage;

      animes = animes.slice(start, end);
    }

    return reply.send({
      success: true,
      data: [...animes].map(({ url_image, coverUrl, url, id, nb_eps, title, ...anime }) => ({
        id,
        url_image,
        url,
        nb_eps,
        title,
      })),
    });
  };
}

