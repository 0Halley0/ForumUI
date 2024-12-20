/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: "#3490dc",
        secondary: "#534B52",
        background: "#E0DDCF",
        text: "#333333",
        buttonText: "#ffffff",
        logo: "#000000",
        darkPurple: "#2D232E",
        gold: "#FFD700",
        goldenRod: "#DAA520",
        signinPopupBg: "#ffffff",
        // Dark mode colors
        dark: {
          primary: "#1e40af",
          secondary: "#534B52",
          background: "#2D232E",
          text: "#ffffff",
          buttonText: "#000000",
          logo: "#FFD700",
          darkPurple: "#2D232E",
          gold: "#FFD700",
          goldenRod: "#DAA520",
          signinPopupBg: "#2D232E",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
