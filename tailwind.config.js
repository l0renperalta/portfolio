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
        lighTheme: {
          50: '#f0fbfb',
          100: '#d8f2f5',
          200: '#b7e5ea',
          300: '#97d9e1',
          400: '#4bb6c5',
          500: '#2f9aab',
          600: '#2a7d90',
          700: '#286676',
          800: '#285462',
          900: '#254754',
          950: '#142e38',
        },
        darkTheme: {
          50: '#f2f8fd',
          100: '#e4eefa',
          200: '#c3ddf4',
          300: '#8fc2ea',
          400: '#53a2dd',
          500: '#2d86ca',
          600: '#1d69ac',
          700: '#19558b',
          800: '#194973',
          900: '#1a3d60',
          950: '#10253c',
        },
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
      'space-mono': ['Space Mono'],
    },
  },
  plugins: [],
};
