/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ["PlusJakartaSans"],
        PlusJakartaSansRegular: ["PlusJakartaSansRegular"],
        PlusJakartaSansBold: ["PlusJakartaSansBold"],
        PlusJakartaSansMedium: ["PlusJakartaSansMedium"],
        PlusJakartaSansExtraBold: ["PlusJakartaSansExtraBold"],
      },
    },
  },
  plugins: [],
};
