/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#001f3f',
          800: '#002952',
          700: '#003366',
        },
        'brand-red': '#ff4136',
      },
    },
  },
  plugins: [],
};