const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //作用：打包完js文件，然后将js文件注入到html模板中
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    // devtool:'none',
    devtool:'cheap-module-eval-source-map', //开发环境用这个又快提示又全面
    // mode: 'production',
    // devtool:'cheap-module-source-map',//线上环境

//开发者模式sourceMap默认是打开的，所以这句代码就是关闭，我们浏览器报错，之知道是打包后的文件报错
// ，无法知道源码的那个位置出错，sourceMap他是一个映射关系 ,他会告诉你源文件哪行报错。(映射关系，打包后有map文件)
    // mode: 'production',
    entry: {
        main:'./src/index.js', // 打包生成main.js
        // bundle:'./src/index.js',  //打包多个文件
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),       // contentBase:'./dist'也可以
        port: 9000, //默认8080
        // compress: true,
        open:true,
        proxy: {
            '/api': {
                target: 'https://other-server.example.com',
                secure: false
            }
        }
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
        // publicPath: "/",
        // publicPath: "http://cdn.com.cn", //打包完成后的文件会变成
        // <script src="http://cdn./com.cn/main.js"></script>
        filename: '[name].js',  //占位符
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
        new CleanWebpackPlugin()  //两种方式都可以，作用 先删除dist目录，然后再打包
        // new CleanWebpackPlugin({
        //     cleanAfterEveryBuildPatterns: ['dist']
        // })
    ]
};

