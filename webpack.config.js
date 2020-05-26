const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            // {test: /\.(jpe?g|png|gif)$/, use: {loader: 'file-loader'}},
            // {
            //     test: /\.(jpe?g|png|gif)$/,
            //     loader: 'file-loader',
            //     options: {
            //         //占位符，webpack官网还有其他
            //         name: '[name]_[hash].[ext]',
            //         outputPath:'images/'
            //     },
            // },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    //占位符，webpack官网还有其他
                    name: '[name]_[hash].[ext]',
                    outputPath:'images/',
                    limit:20480 //（B 字节）默认将图片打包到js文件，但是图片很大时，超过20KB，
                           // 执行file-loader的打包方式
                },
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};