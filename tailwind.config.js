/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundColor: {
        arena: "#d0673d",
        cesped: "#507240",
        pista: "#0166a4",
      },
      textColor: {
        arena: "#d0673d",
        cesped: "#507240",
        pista: "#0166a4",
      },
    },
  },
  plugins: [],
};
