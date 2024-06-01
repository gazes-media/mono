import { Media, Root } from "../types/anilist.type";

export async function fetchAnimeByTitle(title:string): Promise<Media | null>{
	const query = `query ($search: String) {
        Media(search: $search, type: ANIME) {
          id
          nextAiringEpisode{
            episode
            airingAt
            timeUntilAiring
          }
          title {
            romaji
            english
            native
          }
          format
          status
          description
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          tags {
            name
            rank
            id
          }
          episodes
          duration
          trailer {
            id
            site
            thumbnail
          }
          updatedAt
          coverImage {
            extraLarge
            large
            medium
            color
          }
          relations{
            nodes {
              id
              type
            }
          }
          bannerImage
          genres
          synonyms
          popularity
          trending
          isAdult
          idMal
        }
      }
      `;

	const variables = {
		search: title,
	};

	const url = "https://graphql.anilist.co";
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			query: query,
			variables: variables,
		}),
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json() as Root;

		if (!response.ok) {
      return (data as any).errors.length > 0 ? null : (data as any).errors[0].message.includes("Too Many Requests");
    }

		return data.data.Media;
	} catch (error) {
		console.error("Error:", error);
	}
}
