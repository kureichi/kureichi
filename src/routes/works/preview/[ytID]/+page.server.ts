import { getData } from '$src/lib/api/getData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { ytID } = params;
	const data = await getData();

	const workFilter = data.workList.filter((m) => m.youtubeVideoID == ytID);
	const workData = workFilter.pop();

	return {
		workData
	};
};
