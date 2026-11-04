// See https://svelte.dev/docs/kit/types#app.d.ts

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			modal: {
				type: 'PREVIEW' | string;
				href: string;
				// eslint-disable-next-line
				data: Record<string, any>;
			};
		}
		// interface Platform {}
	}
}

export {};
