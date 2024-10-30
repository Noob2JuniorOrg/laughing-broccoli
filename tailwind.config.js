/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#222831',
        'calc-dark-green': '#00474B',
        'calc-light-green': '#9FE8DF',
        'calc-mid-green': '#26C2AE'
      },
      fontFamily: {
        calculator: ['Space Mono']
      },
      screens: {
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}

