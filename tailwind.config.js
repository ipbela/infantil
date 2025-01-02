/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"], // Inclua seus arquivos
  theme: {
    extend: {
      colors: {
        primary: '#7AC0E4',
        secondary: '#FFFF00',
        accent: '#FFF',
      },
      fontFamily: {
        chicle: ['Chicle', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
