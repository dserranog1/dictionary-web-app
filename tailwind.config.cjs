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
        "purple-primary": "#A445ED",
      },
      boxShadow: {
        white: "0 5px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
