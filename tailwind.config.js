/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B3030",
        secondary: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
