import type { WorkType } from '$src/lib/type';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const layoutData = await parent();
	const { ytID } = params;

	if (!layoutData.data) {
		return {
			workData: null
		};
	}

	let workData: WorkType | null = null;
	for (let work of layoutData.data.workList) {
		if (work.ytId == ytID) {
			workData = work;
			break;
		}
	}

	return {
		workData
	};
};
