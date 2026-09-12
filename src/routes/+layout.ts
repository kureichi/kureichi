import type { ResponseJson } from '$lib/type';
import { parseJSON } from '$lib/util';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => {
	try {
		const res = await fetch('/api/data');
		const text = await res.text();
		const json = parseJSON<ResponseJson>(text);
		if (json.success) {
			console.log('[layoutLoad] success fetching data from server');
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
