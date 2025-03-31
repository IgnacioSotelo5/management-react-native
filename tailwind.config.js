
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./app/**/*.{tsx,jsx,ts,js}", "./app/(tabs)/**/*.{tsx,jsx,ts,js}", "./components/**/*.{tsx,jsx,ts,js}"],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        heading: undefined,
        body: undefined,
        mono: undefined,
        quicksand: ['Quicksand'],
        inter: ['Inter']
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      }
    },
  },
  plugins: [],
};
