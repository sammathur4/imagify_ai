/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      height: {
        lg: "36em",
        md: "28em",
        "screen-90": "90vh",
      },
      width: {
        lg: "36em",
      },
      fontSize: {
        "2xs": ".625em",
      },
      textColor: {
        primary: "rgba(25, 118,210 , 1)",
      },
      backgroundColor: {
        "bg-1": "#eaf4f4",
        primary: "rgba(25, 118,210 , 1)",
      },
      borderColor: {
        primary: "rgba(25, 118,210 , 1)",
      },
      minWidth: {
        lg: "16em",
      },
    },
  },
  plugins: [],
};
