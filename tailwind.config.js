/** @type {import('tailwindcss').Config} */
const defaultTheme = require("./src/styles/theme/commonDefaultTheme");

module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        screen: defaultTheme.breakpoints,
        extend: {
            colors: defaultTheme.palette,
            typography: defaultTheme.typography,
            shape: defaultTheme.shape,
        },
      gridTemplateColumns: {
        '4': 'repeat(auto-fill, minmax(300px, 1fr))',
      }
    },
    plugins: [],
}