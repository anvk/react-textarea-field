'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel', exclude: /node_modules/
      }
    ]
  },

  externals: {
    react: 'React'
  },

  output: {
    filename: 'dist/react-textarea-field.js',
    libraryTarget: 'umd',
    library: 'ReactTextareaField'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
