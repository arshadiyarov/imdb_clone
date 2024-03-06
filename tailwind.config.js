/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#0F0F0F",
        secondDark: "#222222",
        thirdDark: "#3A3B3B",
        light: "#F2F2F2",
        secondLight: "#F8F8F8",
        secondText: "#979797",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
