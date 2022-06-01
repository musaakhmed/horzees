module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                hero: "url('/images/hero.png')",
                'bg-image': "url('/images/bg.jpeg')",
                page: "url('/images/page-bg.png')",
            }),
            fontFamily: {
                avenir: 'Avenir Black',
                avenirstd: 'Avenir Book',
                avenirroman: 'Avenir Roman',
                avenirnext: 'Avenir Next',
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
                        transform: 'rotate(1deg)',
                    },
                    '75%': {
                        transform: 'rotate(-1deg)',
                    },
                },
            },
        },
    },
}
