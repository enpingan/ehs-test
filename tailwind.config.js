/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {},
  },
  theme: {
    screens: {
      landscape: { raw: "(orientation: landscape), (min-width: 768px)" },
      "landscape-all": { raw: "(orientation: landscape)" },
      tabletp: "768px",
      tabletl: "1024px",
      desktop: "1025px",
      laptop: "1140px",
      widescreen: "1280px",
      extrawide: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: {
        true: "#000000",
        DEFAULT: "#141414",
      },
    },
    fontWeight: {
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      900: 900,
    },
    fontFamily: {
      // add font families here:
      // ex: sans: ['Helvetica', 'sans-serif']
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      30: "30px",
      32: "32px",
      36: "36px",
      40: "40px",
      45: "45px",
      80: "80px"
    },
    spacing: {
      0: "0",
      4: "4px",
      5: "5px",
      8: "8px",
      10: "10px",
      12: "12px",
      15: "15px",
      18: "18px",
      20: "20px",
      24: "24px",
      25: "25px",
      30: "30px",
      35: "35px",
      40: "40px",
      45: "45px",
      50: "50px",
      55: "55px",
      60: "60px",
      65: "65px",
      70: "70px",
    },
    extend: {},
  },
  variants: {
    extend: {
      cursor: ["disabled"],
    },
  },
  plugins: [],
}