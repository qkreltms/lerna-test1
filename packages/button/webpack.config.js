const path = require('path')

module.exports = {
  entry: './src',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'lib'),
  },
}
