module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    // This is where we want webpack to build our bundle.
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: 'http://localhost:8080/build/',
    proxy: {
      '/api': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};