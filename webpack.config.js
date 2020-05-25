const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            // {test: /\.(jpe?g|png|gif)$/, use: {loader: 'file-loader'}},
            {test: /\.(jpe?g|png|gif)$/, loader: 'file-loader'},
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};