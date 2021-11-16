/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
// import preprocess from 'svelte-preprocess';
// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

const config = {
	// preprocess: [
	// 	preprocess({
	// 		postcss: {
	// 			plugins: [tailwindcss, autoprefixer]
	// 		}
	// 	})
	// ],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: null
		})
	}
};

export default config;
