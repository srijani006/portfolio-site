/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'btn-gradient',
    'glass',
    'glass-dark',
    'text-shadow',
    'text-shadow-lg',
    'glow',
    'glow-lg',
  ]
}