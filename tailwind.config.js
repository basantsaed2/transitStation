/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryeRegular: ["Regular"],
        primaryeMedium: ["Medium"],
        primaryeBold: ["Bold"],
      },
      colors: {
        mainColor: "#3F4CD0",
        secoundColor: "#ffff",
        thirdColor: "#727272",
        // AddText:"#5E5E5E",
      },
      backgroundColor: {
        // mainBgColor: "#7E7D7D",
        // secoundBgColor: "#cccccc",
        // thirdBgColor: "#f6f6f6",
        // AddButton:"#ffffff",
      },
      screens: {
        sm: "250px",
        md: "640px",
        lg: "740px",
        xl: "1080px",

        // sm: "300px",
        // md: "600px",
        // lg: "800px",
        // xl: "1000px",

        // lg: "900px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
}

