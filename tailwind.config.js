/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "50vh": "50vh",
      },
      colors: {
        customBlue: "#88a9ef",
        customWhiteBlute: "#e7f0ff",
      },
    },
  },
  plugins: [],
};
