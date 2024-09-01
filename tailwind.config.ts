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
    },
  },
  plugins: [],
}
export default config