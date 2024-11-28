const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
        clean: true
    },
    mode: 'development',
    plugins: [],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.styl$/i,
                use: ["style-loader", "css-loader", "stylus-loader"]
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
            }
        ]
    }
}