/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020202",
        secondary: "#ffffff",
        accent: "#F3F3F2",
      },
    },
  },
  plugins: [],
};
