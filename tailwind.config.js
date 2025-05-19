/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./app/**/*.{tsx,jsx,ts,js}",
    "./app/(tabs)/**/*.{tsx,jsx,ts,js}",
    "./components/**/*.{tsx,jsx,ts,js}"
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik_400Regular', 'sans-serif'],
        rubik: ['Rubik_400Regular', 'sans-serif'],
        'rubik-medium': ['Rubik_500Medium', 'sans-serif'],
        'rubik-bold': ['Rubik_700Bold', 'sans-serif']
      },
      colors: {
        light: {
          background: '#FFFDF7',
          surface: '#FFF6E5',
          primary: '#D9822B',
          primaryDark: '#B1611C',
          primaryLight: "#F5B97A", //F9C89A
          text: '#3D2C1E',
          textSecondary: '#7A6A58',
          border: '#E0D4C2',
          success: '#5BBE72',
          error: '#D9534F',
        },
        dark: {
          background: '#1E1A16',
          surface: '#2B241F',
          primary: '#F3A03C',
          primaryDark: '#D9822B',
          primaryLight: "#CAAA6E",
          text: '#F5F0EA',
          textSecondary: '#C3B7A8',
          
          border: '#3B332D',
          success: '#70D88B',
          error: '#FF6B6B',
        },
      }
    }
  },
  plugins: [],
};
