module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      height: {
        fit: "fit-content",
      },
      width: {
        fit: "fit-content",
      },
      transitionDelay: {
        7000: "7000ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
