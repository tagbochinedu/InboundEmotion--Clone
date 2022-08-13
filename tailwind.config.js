/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "merri": "Merriweather Sans, serif",
        "advent": "Advent Pro, sans-serif",
        "julius": "Julius Sans One",
        "alegreya": "Alegreya Sans, sans-serif",
        "source": "Source Serif Pro",
        "merr": "Merriweather",
      },
      colors: {
        "bgBody": "#FFF9F4",
        "orng": "#EC8128",
        "bgBody2": "#75A6A2",
        "footer": "#494949",
      },
    },
  },
  plugins: [],
};
