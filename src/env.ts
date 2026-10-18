import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({ CSV_VIDEO_URL: { static: true } });
