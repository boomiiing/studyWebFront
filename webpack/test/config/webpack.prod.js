const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

function getStyleLoader(pre) {
    return [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: ['postcss-preset-env']
                }
            }
        },
        pre
    ].filter(Boolean)
}


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/main.js',
        clean: true
    },
    mode: 'production',
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, '../src')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new CssMinimizerPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: getStyleLoader()
            },
            {
                test: /\.less$/i,
                use: getStyleLoader("less-loader")
            },
            {
                test: /\.s[ac]ss$/i,
                use: getStyleLoader("sass-loader")
            },
            {
                test: /\.styl$/i,
                use: getStyleLoader("stylus-loader")
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: 'static/images/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff|woff2|mp4|webm|ogg|mp3|wav|flac|aac)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'static/media/[hash:10][ext][query]'
                }
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}