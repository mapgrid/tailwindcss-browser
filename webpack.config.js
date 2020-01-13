const path = require('path')

module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tailwindcss-browser.js',
        library: '',
        libraryExport: 'default',
        libraryTarget: 'commonjs-module',
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['to-string-loader', 'css-loader'],
            },
        ],
    },
    node: {
        fs: 'empty',
    },
    resolve: {
        alias: {
            [path.resolve(
                __dirname,
                'node_modules/tailwindcss/lib/plugins/preflight.js',
            )]: path.resolve(__dirname, 'preflight.js'),
        },
    },
}
