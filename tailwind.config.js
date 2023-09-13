/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#18181b',
        secondary: '#ffffff',
        gray: {
          900: '#433495',
        },
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
  },
  plugins: [],
};
