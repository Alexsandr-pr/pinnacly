/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        buttonShadow: "0px 3px 12px 0px rgba(38, 32, 246, 0.16)",
        inputShadow: "0px 8px 25px 0px rgba(13, 10, 44, 0.06)"
      },
      colors: {
        "primary" : {
          400: "rgb(106 101 255)",
          500: "#2620F6"
        },
        'dark': {
          500: "#1D1233"
        },
        "violet": {
          500: "#8B79AC"
        },
        "white": {
          100: "#fff",
          500: "#F9EBFF"
        }
      }
    },
  },
  plugins: [],
}

