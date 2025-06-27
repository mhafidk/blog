import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		},
		alias: {
			$lib: path.resolve('./src/lib'),
			$posts: path.resolve('./src/posts')
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
