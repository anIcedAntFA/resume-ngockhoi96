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
      color: {
        primary: '#251C17'
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
