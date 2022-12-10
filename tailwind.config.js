/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './sections/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#209476',
                'secondary': '#10B981',
                'danger': '#EF4444',

            }
        },
    },
    plugins: [],
}
