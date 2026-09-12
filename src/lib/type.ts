export interface Work {
	name: string;
	description: string;
	category: string;
	ytId: string;
}

export interface Data {
	categoryList: string[];
	workList: Work[];
}

export interface ResponseJson {
	success: boolean;
	message: string;
	content: Data;
}
