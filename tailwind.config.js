/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Blue
          dark: '#1E40AF', // Dark Blue          
        },
        secondary: {
          DEFAULT: '#808080', // gray
          dark: '#404040', // dark gray          
        },
       
        background: {
          light: '#FFFFFF', // White
          dark: '#1E3A8A', // Dark Blue
        },
        text: {
          light: '#1E3A8A', // Dark Blue
          dark: '#FFFFFF', // White
        },
      },
    },
  },
  plugins: [],
};
