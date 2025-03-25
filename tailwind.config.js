const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rougevif: '#E63946',
          noirprofond: '#1D1D1D',
          blancpur: '#FFFFFF',
          rougefonce: '#A4161A',
          gris: '#2B2B2B',
          blanccasse: '#F5F5F5',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

