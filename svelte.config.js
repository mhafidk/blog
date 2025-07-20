import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const extensions = ['.svelte', '.svx', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
  extensions,

	preprocess: [vitePreprocess(), mdsvex({extensions: ['.svx', '.md']})],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		},
		alias: {
			$lib: path.resolve('./src/lib'),
			$posts: path.resolve('./src/posts')
		}
	}
};

export default config;
