import { HTTPMethods, RouteHandlerMethod } from "fastify";
import { Route } from "../Route";
import { AnimeStore } from "../../store/animes.store";

interface Params {
	lang: string;
	id: any;
	episodeNumber: any;
}

export class AnimesIdEpisodeRoute extends Route {
	public url: string = "/animes/:id/:episodeNumber";
	public method: HTTPMethods = "GET";

	public handler: RouteHandlerMethod = async (request, reply) => {
		let { id, episodeNumber } = request.params as {
			id: number;
			episodeNumber: number;
		};

		episodeNumber = parseInt(episodeNumber.toString());
		id = parseInt(id.toString());

		/* These are validation checks being performed on the `lang`, `id`, and `episode` parameters
		received in the request. */
		if (isNaN(id)) {
			return reply.status(400).send({
				success: false,
				message: "Specified ID is NaN",
			});
		}

		if (isNaN(episodeNumber)) {
			return reply.status(400).send({
				success: false,
				message: "Specified episode is NaN",
			});
		}

		if (episodeNumber < 1) {
			return reply.status(400).send({
				success: false,
				message: "Specified episode is less than 1",
			});
		}

		const anime = await AnimeStore.get(id);
		const episode = anime.episodes.filter((e) => e.num === episodeNumber)[0];

		if (!episode) {
			return reply.status(404).send({
				success: false,
				message: `Anime with id ${id} has no episode ${episodeNumber}.`,
			});
		}

		const EpisodeURIExist = await AnimeStore.getEpisodeVideo(episode);

		if (!EpisodeURIExist) {
			return reply.status(404).send({
				success: false,
				message: `Anime with id ${id} has no episode ${episodeNumber}.`,
			});
		}

		const VFEpisodeURIExist = await AnimeStore.getEpisodeVideo({ url: episode.url.replace("vostfr", "vf"), ...episode });

		let response = {
			vostfrVideoURL: `https://proxy.ketsuna.com?url=${encodeURIComponent(EpisodeURIExist.uri)}`,
			vfVideoURL: VFEpisodeURIExist ?? `https://proxy.ketsuna.com?url=${encodeURIComponent(VFEpisodeURIExist.uri)}`,
			...episode
		};

		return reply.status(200).send({
			success: true,
			data: response,
		});
	};
}
