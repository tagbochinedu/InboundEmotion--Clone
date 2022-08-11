/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'merri': "Merriweather Sans, serif",
        'advent': "Advent Pro, sans-serif",
        'julius': "Julius Sans One",
        'alegreya' : 'Alegreya Sans, sans-serif'
      },
    },
  },
  plugins: [],
};
