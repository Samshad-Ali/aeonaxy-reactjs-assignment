/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimaryClr:"#0079C1",
        bgSndryClr:"#012169",
        textPrimaryClr:"#00457C"
      }
    },
  },
  plugins: [],
}