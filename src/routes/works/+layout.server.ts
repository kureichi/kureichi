import { getData } from '$src/lib/api/getData';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		data: await getData()
	};
};
