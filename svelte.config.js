import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import relativeImages from "mdsvex-relative-images";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex({
		extensions: ['.md'],
		remarkPlugins: [relativeImages]
	})],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
