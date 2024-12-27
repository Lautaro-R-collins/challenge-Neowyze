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
				'sm': '400px',      
				'md': '768px',      
				'lg': '1024px',     
				'xl': '1280px',   
				'xlg': '1280px',  
				'xxl': '1920px',    
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
