/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark1': '#202123',
        'dark2': '#343541', //.bg-gray-800
        'dark3': '#444654',
        'activegreen':"#19C37D" //bg-green-500 rgb(25, 195, 125)
      },
    },
  },
  plugins: [],
};
