const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src',
  context: path.resolve(__dirname),
  resolve: {
    modules: ['node_modules'],
    symlinks: true,
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            // root 폴더의 babel을 상속받는다.
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: {
          loader: 'raw-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
