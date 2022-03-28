module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'hero-pattern': "url('/images/hero.jpg')",
            }),
            fontFamily: {
                body: ['Josefin Sans'],
            },
            animation: {
                tilt: 'tilt 10s infinite linear',
            },
            keyframes: {
                tilt: {
                    '0%, 50%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '25%': {
                        transform: 'rotate(0.5deg)',
                    },
                    '75%': {
                        transform: 'rotate(-0.5deg)',
                    },
                },
            },
        },
    },
    plugins: [],
}
