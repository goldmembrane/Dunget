const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { resolve } = require('path')

module.exports = {
    entry: {
        router: './src/router.js',
        app: './src/index.js',
    },

    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist'],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
            }
        ]
    }
}