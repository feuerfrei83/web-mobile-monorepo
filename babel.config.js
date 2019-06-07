module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
        [
            '@babel/env',
            {
                targets: {
                    browsers: 'Last 2 Chrome versions, Firefox ESR',
                    node: '8.9',
                },
            },
        ],
        [
            '@babel/preset-react',
            {
                development: process.env.BABEL_ENV !== 'build',
            },
            ],
        ]
    }
}