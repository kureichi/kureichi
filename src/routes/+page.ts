import type { ResponseJson } from '$lib/type';
import { parseJSON } from '$lib/util';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch('/api/data');
		const text = await res.text();
		const json = parseJSON<ResponseJson>(text);
		if (json.success) {
			return {
				data: json.content
			};
		}

		return {
			data: null
		};
	} catch {
		return;
	}
};
