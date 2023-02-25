/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
        serif: "Lora",
        mono: "Inconsolata",
      },
      colors: {
        "purple-medium-deep": "#A445ED",
        "white-smoke": "#E9E9E9",
        "gray-dark": "#757575",
        "gray-deep-dark": "#1F1F1F",
        "gray-lightest": "#F4F4F4",
        "charcoal-dark": "#2D2D2D",
        "gray-deep-very-dark": "#050505",
      },
      boxShadow: {
        "white-main": "0 5px 30px rgba(0, 0, 0, 0.1)",
        "black-main": "0 5px 30px #A445ED",
      },
    },
  },
  plugins: [],
};
