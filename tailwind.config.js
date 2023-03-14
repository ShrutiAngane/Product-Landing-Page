/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode:"jit",
  theme: {
    extend: {
      screens: {
        xs:"320px",
        ss: "480px",
        xxl: "1700px",
      },
    },
  },
  plugins: [],
}
