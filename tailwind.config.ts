import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik",
        ibmBold: "IBM-Bold",
        ibmRegular: "IBM-Regular",
      },
      colors: {
        primary: "#075985",
        primary_hover: "#0284c7",
        dark: "#e9bb5d",
        dark_hover: "#ffcf6e",
      }
    },
  },
  plugins: [],
}
export default config