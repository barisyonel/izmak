const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3001,
    open: true,
    proxy: {
      '/api/products': 'http://localhost:5001',
      '/api/login': 'http://localhost:5001',
      '/api/banner': 'http://localhost:5001',
      '/api/contacts': 'http://localhost:5001',
      '/api/gallery': 'http://localhost:5001',
      '/api/drawings': 'http://localhost:5001',
      '/api/analytics': 'http://localhost:5001'
    },
  },
}; 