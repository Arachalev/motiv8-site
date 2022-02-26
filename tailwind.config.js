module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({

        motiv8: "#137297",
        digi: "#ebdfd0"

      }),
      height: {
        'digi': '50rem',
      },
      dropShadow: {
        'digi': '0px -40px 10px rgba(235, 223, 208, 1)',
         
      },

      fontFamily: {
        sans: [
          'Poppins',]}       
      
    },
  },
  plugins: [],
}