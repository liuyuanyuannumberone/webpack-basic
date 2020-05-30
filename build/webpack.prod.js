const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',//线上环境
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules:true, //css模块化打包
                    }
                }, 'sass-loader', 'postcss-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        // modules:true,
                    }
                }, 'postcss-loader'],
            },
        ],
    },
    plugins:[new MiniCssExtractPlugin({
        filename:'[name].css',
        chunkFilename: '[name].chunk.css',
    })],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],  //css代码压缩
    },
};


module.exports = merge(commonConfig, prodConfig);
