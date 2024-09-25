/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('../assets/fundo.jpg')",
      }
    },
  },
  plugins: [],
}

