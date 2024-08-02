/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#E1C4AD",
        black: "#131212",
        button: "#8E6D5D",
      },
      fontSize: {
        base: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.3125rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      fontFamily: {
        "estedad-vf": "Estedad-VF",
      },
    },
  },
  plugins: [],
};
