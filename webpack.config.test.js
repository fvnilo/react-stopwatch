var path = require('path');
var webpack = require('webpack');

var srcFolder = path.join(__dirname, 'src');

module.exports = {
  output: {
    path: path.join(__dirname, 'tmp'),
    filename: 'testBundle.js'
  },
  resolve: {
    root: srcFolder,
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        srcFolder,
        path.join(__dirname, 'test')
      ]
    }]
  }
};
