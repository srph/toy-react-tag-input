module.exports = {
  entry: './index.js',
  output: {
    filename: 'script.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  }
};
