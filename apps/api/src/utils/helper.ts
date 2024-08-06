export async function handleError<T>(
	fn: Promise<T>,
	defaultValue: T = null,
): Promise<[T | any, any]> {
	try {
		return [await fn, null];
	} catch (error) {
		return [defaultValue, error];
	}
}

export function episodeToNumber(episode: string) {
	return Number(episode.replace("Ep. ", ""));
}
