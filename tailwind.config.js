/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      display: ["group-hover"],
      colors: {
        'light-blue': '#0079FF',
        'light-grey': '#697C9A',
        'navy-blue': '#4B6A9B',
        'dark-grey': '#2B3442',
        'off-white': '#F6F8FF',
        'almost-white': '#FEFEFE',
        'dark-mode-black': '#141D2F',
        'dark-blue': '#1E2A47',
        'background': '#222831'
      },
      fontSize: {

      },
      fontFamily: {
        equalizer: ['IBM Plex Sans'],
        'github-user': ['Space Mono'],
        'e-commerce': ['Kumbh Sans'],
        'loopstudios': ['Alata'],
        'looptstudios-headline': ['Josefin Sans']
      },
      screens: {
        'xl': '1440px',
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: []
}
