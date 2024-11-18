/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        'background': '#222831'
      },
      screens: {
        'xl': '1440px',
      },
      fontFamily: {
        'loopstudios': ['Alata'],
        'looptstudios-headline': ['Josefin Sans']
      },
    },
  },
  plugins: [],
}