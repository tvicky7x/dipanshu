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
      },
      colors: {
        hiddenTextColor: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
