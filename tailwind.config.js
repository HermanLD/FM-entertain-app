/* eslint-disable */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC4747",
        "neutral-1": "#979797",
        "neutral-2": "#161D2F",
        dark: "#10141E",
        white: "hsl(0, 0%, 100%)",
        "white-op": "hsl(0, 0%, 100%, 0.5)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      fontSize: {
        xs: "0.8125rem",
        base: "0.9375rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
