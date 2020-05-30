const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //作用：打包完js文件，然后将js文件注入到html模板中
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    entry: {
        main: './src/index.js', // 打包生成main.js
    },
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
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: {loader: 'file-loader'}},
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
                options: {
                    // presets: [["@babel/preset-env", {useBuiltIns: "usage"}]],
                    // 用babelrc，runtime 免类库污染
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
        new CleanWebpackPlugin(), //两种方式都可以，作用 先删除dist目录，然后再打包
        // new CleanWebpackPlugin({
        //     cleanAfterEveryBuildPatterns: ['dist']
        // })
    ],
    optimization: {
        splitChunks: {
            // chunks: 'async',
            // minSize: 30000,
            // minChunks: 1,
            // maxAsyncRequests: 6,
            // maxInitialRequests: 4,
            // automaticNameDelimiter: '~',
            // cacheGroups: {
            //     defaultVendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         filename:'vendors.js'
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true,
            //         filename:'common.js'
            //     }
            // },
            chunks: "all"
        }  //类库代码分割，产生vendors-main.js文件。避免加载不需要的代码浪费时间
    },
    output: {
        // publicPath: "/",
        // publicPath: "http://cdn.com.cn", //打包完成后的文件会变成
        // <script src="http://cdn./com.cn/main.js"></script>
        filename: '[name].js',  //占位符
        path: path.resolve(__dirname, '../dist')
    },
};