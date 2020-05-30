const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig=require('./webpack.common');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', //开发环境用这个又快提示又全面
//开发者模式sourceMap默认是打开的，所以这句代码就是关闭，我们浏览器报错，之知道是打包后的文件报错
// ，无法知道源码的那个位置出错，sourceMap他是一个映射关系 ,他会告诉你源文件哪行报错。(映射关系，打包后有map文件)
    devServer: {
        contentBase: path.join(__dirname, './dist'),       // contentBase:'./dist'也可以
        // port: 9000, //默认8080
        // compress: true,
        open: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'https://other-server.example.com',
                secure: false
            }
        }
    },
    module: {
        rules: [
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
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),  //作用，只会对页面css样式更改，不会重新加载页面
        // ，不会更改js的内容   HMR模块
        new BundleAnalyzerPlugin(),
    ],
    // optimization:{
    //     usedExports: true,
    // }
//  tree Shaking 只对导入的模块进行打包，但是import from ‘css’ 这样的不打包，出现问题，只能到packjson
//文件去配置，"sideEffects": false ，这里取消这个功能，只做了解。
// 开发模式下不生效，生产环境需要配置 "sideEffects": false，不需要配置optimization。
};

module.exports=merge(commonConfig,devConfig);