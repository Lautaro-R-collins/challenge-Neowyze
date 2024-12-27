/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				bebas: ['"Bebas Neue"', 'sans-serif'],
				manrope: ['"Manrope"', 'sans-serif'],
			},
			screens: {
				'sm': '400px',      // Pantallas pequeñas
				'md': '768px',      // Pantallas medianas
				'lg': '1024px',     // Pantallas grandes (tabletas, etc.)
				'xl': '1280px',     // Laptops medianas
				'xlg': '1280px',  // Pantallas entre 1280px y 1920px (breakpoint intermedio)
				'xxl': '1920px',    // Pantallas grandes (pantallas más grandes que 1920px)
			},
			colors: {
				primary: '#929f36',
				secondary: '#564376',
				mutedText: '#6e6e6e',
			},
		},
	},
	plugins: [],
};
