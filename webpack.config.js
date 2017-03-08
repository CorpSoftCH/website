const path = require('path');
module.exports = {
    entry: "./app/main.ts",
    output: {
        path: './prod',
        filename: 'coso.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },]
    }
};
