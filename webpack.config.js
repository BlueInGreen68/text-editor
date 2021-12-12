const path = require('path');

module.exports = {
    entry: './editor.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'editor.js',
        path: path.resolve(__dirname, './'),
    },
};
