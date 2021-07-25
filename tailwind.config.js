module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            latte: '#FFFCE8',
            coffee: '#3E363F',
            sky: '#247BA0',
            avocadoToast: '#697A21',
            paprika: '#BB342F',
        },
        fontFamily: {
            source: 'Red Hat Display, sans-serif',
            cursive: 'Cedarville Cursive, cursive',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
