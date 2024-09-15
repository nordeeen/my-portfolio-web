/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'mobile': {'min': '320px', 'max': '639px'},  // Untuk ukuran mobile
        'tablet': {'min': '640px', 'max': '1023px'}, // Untuk ukuran tablet
        'desktop': {'min': '1024px'},                // Untuk ukuran desktop
      },
      colors: {
        'primary': '#4851FD',  // Warna latar utama
        'second': '#1E1E1E', // Warna latar kedua
        'third': '#EBECF2', // Warna latar ketiga
      },
      texts: {
        'text-primary': '#4851FD',
        'text-second': '#1E1E1E',
        'text-third': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
