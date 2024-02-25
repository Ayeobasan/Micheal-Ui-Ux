/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,css,js}"],
  theme: {
    extend: {
    },
    screens: {
      xxs: "300px",
      xs: "400px",
      sm: "480px",
      xm: "640px",
      md: "768px",
      xd: "960px",
      lg: "992px",
      xlg: "1110px",
      xl: "1200px",
    },
  },
  plugins: [],
};