/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "50vh": "50vh",
        "px-99": "99px",
      },
      width: {
        "px-1200": "1200px",
      },
      colors: {
        customBlue: "#88a9ef",
        customWhiteBlute: "#e7f0ff",
        CustomBlueHead: "#2BAFFC",
      },
    },
  },
  plugins: [],
};
