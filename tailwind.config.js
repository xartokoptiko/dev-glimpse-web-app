/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors :{
        "blackGray-200" : "#12181b",
        "blackGray-100" : "#1c2330",
        "myPurple" : "#7724c3",
        "myOrange" : "#f27300",
        "mybrown"  : "#62411f"
      }
    },
  },
  plugins: [],
}
