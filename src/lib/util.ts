export function parseJSON<T>(jsonString: string): T {
	return JSON.parse(jsonString);
}
