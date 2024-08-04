import { load, CheerioAPI } from "cheerio";

type FetchType = "text" | "json" | "xml";
type ReturnFetchType<T extends FetchType, V> = T extends "text" ? string : T extends "json" ? V : CheerioAPI;

export async function fetcher<V = any, T extends FetchType = "json">(
	url: string,
	type: T = "json" as T,
): Promise<ReturnFetchType<T, V>> {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				reject({
					status: response.status,
					statusText: response.statusText,
					response: response,
				});
			}

			switch (type) {
				case "text":
					resolve((await response.text()) as ReturnFetchType<T, V>);
				case "json":
					resolve((await response.json()) as ReturnFetchType<T, V>);
				case "xml":
					resolve(load(await response.text(), { xmlMode: true }) as ReturnFetchType<T, V>);
				default:
					reject("Invalid fetch type");
			}
		} catch (error) {
			reject(error);
		}
	});
}
