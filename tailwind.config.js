/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: "376px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        desktopImage: "url('/images/pattern-background-desktop.svg')",
        mobileImage: "url('/images/pattern-background-mobile.svg')",
      },
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
      },
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
