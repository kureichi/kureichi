import type { Data } from '../type';
import { parseJSON } from '../util';

export const getData = async () => {
	const res = await fetch('/data/data.json');
	const text = await res.text();

	const data = parseJSON<Data>(text);

	console.log('[api/getData] success fetching data');

	return data;
};
