/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // Asegura que Tailwind lea tus archivos
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel Variable"', 'serif'],
        sans: ['ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
