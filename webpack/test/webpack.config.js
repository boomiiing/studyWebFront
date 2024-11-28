const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [],
    module: {
        rules: [
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/i,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.s[ac]ss$/i,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.styl$/i,
                use:["style-loader","css-loader","stylus-loader"]
            },
            {
                test:/\.(png|jpe?g|gif|webp|svg)$/i,
                type: "asset",
                parser:{
                    dataUrlCondition:{
                        maxSize:10*1024
                    }
                }
            }
        ]
    }
}