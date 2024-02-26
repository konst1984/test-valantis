/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        keyframes: {
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-10px)',
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)',
                },
            },
            'fade-in-top': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(10px)',
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)',
                },
            },
        },
        animation: {
            'fade-in-down': 'fade-in-down 0.5s ease-in-out',
            'fade-in-top': 'fade-in-top 0.5s ease-in-out',
        },
        extend: {},
    },
    plugins: [],
};
