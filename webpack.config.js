const path = require('path')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  entry: './src',
  context: path.resolve(__dirname),
  resolve: {
    modules: ['node_modules'],
    symlinks: true,
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  },
  target: 'node',
  externals: ['react', 'react-dom'],
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new ExtractCssChunks()],
}
