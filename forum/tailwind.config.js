/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: "#3490dc",
        secondary: "#ffed4a",
        background: "#f8fafc",
        text: "#333333",

        // Dark mode colors
        dark: {
          primary: "#1e40af",
          secondary: "#fbbf24",
          background: "#111827",
          text: "#e5e7eb",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

