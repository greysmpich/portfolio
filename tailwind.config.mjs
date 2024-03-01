/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors:{
			'green-greys': '#23EDB1',
			'pink-greys': '#FF0D75',
			'lightPink-greys': '#FACED9',
			'white': '#f0fdf4',
			"black": "#27272a",			
		},
		extend: {},
	},
	plugins: [],
}
