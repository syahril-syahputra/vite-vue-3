module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'login': '0 0px 10px 0px rgba(0, 0, 0, 0.3)',
        'button': '0px 5px 5px 0px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary : {
          main : "#FF2352",
          surface : "#ffd3dc",
          border : "#FFB6C5",
          hover : '#d51d44',
          pressed : "#801129",
          focus: "#F3C4CE"
        }
      }
    },
  },
  plugins: [],
}