/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        calc_50p_160px: "calc(50% - 160px)",
        calc_50p_150px: "calc(50% - 150px)",
        calc_100vh_50px: "calc(100vh + 50px)",
        calc_50p_323d2: "calc(50% - 161.5px)",
      },
      colors: {
        hiddenTextColor: "#F5F5F5",
        wireFrameBgColor: "#3a7dfa",
        heroSectionTextColor: "#222222",
        designProcessBorder: "#262626",
      },
      animation: {
        "hover-spin": "hover-spin 10s linear infinite",
      },
      keyframes: {
        "hover-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
