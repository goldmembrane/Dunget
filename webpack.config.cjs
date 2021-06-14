import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

import { resolve } from 'path'

module.exports = {
    entry: {
        router: 'router.js',
        app: 'index.js',
    },

    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
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
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    }
}