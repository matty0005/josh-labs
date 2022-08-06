const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },

            backgroundSize: {
                '4x' : '400%',
            },

            animation: {
                gradient: 'gradient 10s ease infinite',
            },

            keyframes: {
                gradient: {
                    '0%' : { backgroundPosition: '0% 50%' },
                    '50%' : { backgroundPosition: '100% 50%' },
                    '100%' : { backgroundPosition: '0% 50%' },
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
