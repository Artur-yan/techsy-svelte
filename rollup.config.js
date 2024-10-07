import json from '@rollup/plugin-json';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	},
	plugins: [json()]
};

export default config;
