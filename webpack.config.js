const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src', 'client'), path.resolve(__dirname, 'node_modules')],
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/js/',
    port: 3000,
    historyApiFallback: true,
    inline: true,
    open: true,
    host: 'localhost',
    proxy: {
      '/api/**': {
        target: 'http://localhost:8080',
        secure: false,
        logLevel: 'debug',
      }
    },
  },
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js',
  },
};
