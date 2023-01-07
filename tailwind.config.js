/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#326BFF",
      gray: "#D9D9D9",
      darkGray: "#979FA7",
      white: "#ffffff",
      black: "#000000",
      orange: "#FFA500",
      green:"#00FF00"
    },
    fontFamily: { body: ['Be Vietnam Pro', 'sans-serif'] },
    extend: {
      screens: {
        xs: "240px",
      },
      width: {
        icon: "50px",
      },
    },
  },
  plugins: [],
};
