/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#222831'
      },
      fontSize: {

      },
      fontFamily: {
        equalizer: ['IBM Plex Sans']
      },
      screens: {
        'xl': '1440px',
      }
    },
  },
  plugins: [],
}

