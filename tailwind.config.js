/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mateBlack: '#2B2B2B',
      white: '#FFFFFF',
      profBlue: '#0187D9',
      darkProfBlue: '#0579C1',
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
