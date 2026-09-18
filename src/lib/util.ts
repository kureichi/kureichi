export function parseJSON<T>(jsonString: string): T {
	return JSON.parse(jsonString);
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
