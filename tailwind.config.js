module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDelay: {
        7000: "7000ms",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
      translate: {
        "1/10": "10%",
        "1/9": "11.11111%",
        "1/8": "12.5%",
        "1/7": "14.2857143%",
        "1/6": "16.6666667%",
        "1/5": "20%",
      },
      maxWidth: {
        screen: "100vw",
        "80%": "80%",
      },
      height: {
        fit: "fit-content",
      },
      screens: {
        portrait: { max: "360px" },
      },
    },
  },
  variants: {
    translate: ["responsive", "group-focus"],
    extend: {
      translate: ["group-focus"],
    },
  },
  plugins: [],
};
