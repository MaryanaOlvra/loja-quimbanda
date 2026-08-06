/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        dourado: "#c5a059",
        vinho: "#4a0404",
      }
    },
  },
  plugins: [],
}