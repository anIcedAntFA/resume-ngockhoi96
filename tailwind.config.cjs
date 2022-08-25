/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Fira Sans']
      },
      width: {
        'a4': '210mm'
      },
      height: {
        'a4': '297mm'
      }
    },
  },
  plugins: [],
}
