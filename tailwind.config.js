/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display'],
        lato: ['Lato']
      }
    },
  },
  plugins: [],
  plugins: [require("daisyui")],
}

