import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",  
        background: "#F8F8F8", 
        textLight: "#FFFFFF",
        textDark: "#000000",
      },
    },
  },
  plugins: [],
}

export default config