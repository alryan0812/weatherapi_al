/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/input.css", ".src/output.css", "*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

