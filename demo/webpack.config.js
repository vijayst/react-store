const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './index.html',
    filename: './index.html'
});

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: process.env.NODE_ENV === 'production' ? '/react-reducer-store/' : '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', { modules: false }], 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};