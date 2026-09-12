import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
	try {
		const res = await fetch('/data/data.json');
		const text = await res.text();

		const data = JSON.parse(text);

		console.log('[server] success fetching data');

		return json({
			success: true,
			message: 'got data successfully',
			content: data
		});
	} catch (e) {
		console.log(`[server] error fetch data: ${e}`);

		return json({
			success: false,
			message: e
		});
	}
};
