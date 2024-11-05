/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Red:"#B53D2A",
        Green: "#1F8F5C",
        Rose50:"#FEF8F5",
        Rose100: "#FAECE9",
        Rose300: "#D9B3A6",
        Rose400: "#B89789",
        Rose500: "#8B6F63",
        Rose900: "#2C0A07"
      }
    },
    fontFamily:{
      RedHatText:["Red Hat Text", "sans-serif"]
    }
  },
  plugins: [],
}

