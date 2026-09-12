export interface WorkType {
	name: string;
	description: string;
	category: string;
	ytId: string;
}

export interface Data {
	categoryList: string[];
	workList: WorkType[];
}

export interface ResponseJson {
	success: boolean;
	message: string;
	content: Data;
}
