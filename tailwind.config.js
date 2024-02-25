/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "1.8rem",
      },
      height: {
        "90/100": "90%",
        "1/10": "10%",
        "5%": "5%",
        "94%": "94%",
        "1/20": "5%",
      },
      width: {
        "15%": "15%",
        "95%": "95%",
        "50%": "50%",
        "1/5": "20%",
      },
      margin: {
        "2.5%": "2.5%",
      },
      borderRadius: {
        inherit: "inherit",
      },
      backgroundColor: {
        darkgrey: "#d1d1d1",
      },
      inset: {
        "57%": "57%",
      },
    },
  },
  plugins: [],
};
