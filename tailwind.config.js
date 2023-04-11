/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        child1: "url('/public/child1.jpg')",
      },
    },
  },
  plugins: [],
};
