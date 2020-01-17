module.exports = {
  // where webpack is start
  entry: ['./src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    // Tell server where is content
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
    ],
  },
  resolve: {
    // Auto know extension if don't provider
    extensions: ['.js', '.jsx'],
  },
};
