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
        buttonHover: "#fcd34d",
        logo: "#000000",
        darkPurple: "#2D232E",
        gold: "#FFD700",
        goldenRod: "#DAA520",
        signinPopupBg: "#ffffff",
        icon: "#9ca3af",
        // Dark mode colors
        dark: {
          primary: "#1e40af",
          secondary: "#534B52",
          background: "#2D232E",
          text: "#ffffff",
          buttonText: "#000000",
          buttonHover: "#fcd34d",
          logo: "#FFD700",
          darkPurple: "#2D232E",
          gold: "#FFD700",
          goldenRod: "#DAA520",
          signinPopupBg: "#2D232E",
          icon: "#FFD700",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
