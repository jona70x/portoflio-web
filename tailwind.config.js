/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "1.8rem",
        lg: "2rem",
        xl: "2.3rem",
        "2xl": "2.6rem",
      },
    },
  },
  plugins: [],
};
