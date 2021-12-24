const path = require('path');

module.exports = {
    entry: './components/index.ts',
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
        filename: 'components/index.js',
        path: path.resolve(__dirname, './'),
    },
};
