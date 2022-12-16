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
                'primary': '#3b5998',
                'dark-primary': '#2d4373',
                'soft-primary': '#506db0',
                'secondary': '#10B981',
                'danger': '#EF4444',
                'primary-hover': '#2d4373',

            }
        },
        fontFamily: {
            'sans': ['Plus Jakarta Sans', 'Segoe UI','sans-serif'],
        }
    },
}
