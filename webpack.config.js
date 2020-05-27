const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            // {test: /\.(jpe?g|png|gif)$/, use: {loader: 'file-loader'}},
            //             {
            //                 test: /\.(jpe?g|png|gif)$/,
            //                 loader: 'file-loader',
            //                 options: {
            //                     //占位符，webpack官网还有其他
            //                     name: '[name]_[hash].[ext]',
            //                     outputPath:'images/'
            //                 },
            //             },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    //占位符，webpack官网还有其他
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 20480 //（B 字节）默认将图片打包到js文件，但是图片很大时，超过20KB，
                    // 执行file-loader的打包方式
                },
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules:true, //css模块化打包
                    }
                }, 'sass-loader', 'postcss-loader'],
                //loader的执 行顺序从下往上，从右往左执行
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules:true,
                    }
                }, 'postcss-loader'],
            },
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: {loader: 'file-loader'}},
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({template: "src/index.html"})]
};

