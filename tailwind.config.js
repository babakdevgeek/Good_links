/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      foregrand: "#9ba1a6",
      black: "#151718",
      white: "#ecedee",
    },
    extend: {
      colors: {
        "good-links-green": "#4CC38A",
        "good-links-blue": "#0091FF",
        "good-links-yellow": "#F0C000",
        "good-links-orange": "#FF8B3E",
        "good-links-purple": "#9D5BD2",
        "good-links-pink": "#E34BA9",
      },
    },
  },
  plugins: [],
};
