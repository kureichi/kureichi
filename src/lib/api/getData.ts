import { CSV_VIDEO_URL } from '$env/static/private';
import type { Data, WorkType } from '../type';
import { isObject, parseJSON } from '../util';
import Papa from 'papaparse';

export const getData = async (): Promise<Data> => {
	try {
		const csvVideoURL = CSV_VIDEO_URL;
		const res = await fetch(csvVideoURL);

		const csvText = await res.text();
		const parsedData = Papa.parse(csvText, {
			header: true,
			skipEmptyLines: true
		});

		const workList: WorkType[] = parsedData.data
			.map((m) => {
				if (!isObject(m)) return null;

				return {
					name: m['Title'] as string,
					description: m['Description'] as string,
					category: m['Category'] as string,
					ytId: m['Youtube Video ID'] as string
				};
			})
			.filter((m) => m !== null);

		const categoryList = [...new Set(workList.map((m) => m.category))].filter(Boolean);

		console.log('[api/getData] success fetching data');

		return {
            workList,
            categoryList
        };
	} catch (e) {
		console.error(`[api/getData] ${String(e)}`);

        return {
            workList: [],
            categoryList: []
        }
	}
};
