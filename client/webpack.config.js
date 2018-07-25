require('babel-polyfill');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractPluginScss = new ExtractTextPlugin({
  filename: 'main.css',
});

const extractPluginCss = new ExtractTextPlugin({
  filename: 'style.css',
});

const distFolder = '../server/public';

module.exports = {
  entry: ['babel-polyfill', './src/client.jsx'],
  output: {
    path: path.resolve(__dirname, distFolder),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-decorators-legacy', 'babel-plugin-transform-class-properties'],
            },
          },
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.scss$/,
        use: extractPluginScss.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: extractPluginCss.extract({
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(eot|ttf|woff|woff2)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: './server/public',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: './images',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
        exclude: path.resolve(__dirname, 'src/index.html'),
      },
    ],
  },
  plugins: [
    extractPluginScss,
    extractPluginCss,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin([distFolder]),
  ],
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
  },
};
