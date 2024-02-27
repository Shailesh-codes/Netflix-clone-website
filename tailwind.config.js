/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nsans-light": ["Nsans light"],
        "nsans-medium": ["Nsans medium"],
        "nsans-bold": ["Nsans bold"],
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}