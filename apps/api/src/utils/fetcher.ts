import { load, CheerioAPI } from "cheerio";
import { handleError } from "./helper";

type FetchType = "text" | "json" | "xml";
type ReturnFetchType<T extends FetchType, V> = T extends "text"
	? string
	: T extends "json"
		? V
		: CheerioAPI;

export async function fetcher<V = any, T extends FetchType = "json">(
	url: string,
	type: T = "json" as T,
): Promise<[ReturnFetchType<T, V> | null, any]> {
	const [response, fetchError] = await handleError(fetch(url), null);

	if (fetchError || !response || !response.ok) {
		return [
			null,
			fetchError || {
				status: response ? response.status : 500,
				statusText: response ? response.statusText : "Network error",
			},
		];
	}

	switch (type) {
		case "text":
			return handleError(response.text());
		case "json":
			return handleError(response.json());
		case "xml":
			return [
				load(response.text(), { xmlMode: true }) as ReturnFetchType<T, V>,
				null,
			];
		default:
			return [null, "Invalid fetch type"];
	}
}
