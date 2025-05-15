/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1E293B',
        'dark-secondary': '#334155',
        'light-text': '#E2E8F0',
        'accent': '#64748B',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ...],
      },
    },
  },
  plugins: [],
}