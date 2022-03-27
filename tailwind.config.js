// const bg = 12;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({

        motiv8: "#137297",
        digi: "#ebdfd0",
        blog: "#052142"

      }),
      height: {
        'digi': '50rem',
      },
      dropShadow: {
        'digi': '0px -40px 10px rgba(235, 223, 208, 1)',
         
      },

      fontFamily: {
        sans: [
          'Poppins',]} ,
      
          animation: {
            ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          fade: 'fade 2s ease-in'},

            keyframes: {             
              ping: {
                '75%, 100%': {
                  transform: 'scale(1.05)',
                  opacity: '1',
                }
               },
              fade:{
                '0%':{opacity: '.3'},
                '50%':{opacity: '.7'},
                '100%':{opacity : '1'}

              }},
        
          
          
      
    },
  },
  plugins: [],
}