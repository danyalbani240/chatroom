const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D0D2B",
        secondary: "#2B076E",
        accent: "#3671E9",
        "Neutral-white": "#FFFFFF",
        "Neutral-Grey3": "#828282",
        "Neutral-Grey4": "#BDBDBD",
        "Neutral-Grey5": "#E0E0E0",
        "Neutral-Grey6": "#F2F2F2",
        "Neutral-Gradient": "#FAFBFF",
        "Neutral-Green": "#6EDCB5",
        "Neutral-Red": "#FF325F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
