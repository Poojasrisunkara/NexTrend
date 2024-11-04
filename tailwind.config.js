/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {  
      fontFamily: {
        ced: ['Cedarville Cursive', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        headland: ['Headland One', 'serif'],
        qwit: ['Qwitcher Grypen', 'cursive'],
      },
    },
  },
  plugins: [],
}

