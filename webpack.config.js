const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/root.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    // loaders is deprecated.  See rules.
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader?insertAt=top',
        'css-loader?-autoprefixer'
      ],
    }]
  }
}
