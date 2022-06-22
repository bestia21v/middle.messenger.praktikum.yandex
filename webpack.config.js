const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "./": path.resolve(__dirname, './src'),
      "handlebars": "handlebars/dist/handlebars.js"
    },
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "static", to: "./static" },
        { from: "index.html", to: "./" },
        { from: "favicon.ico", to: "./" },
      ],
    }),
  ],
};

module.exports = function(env, argv) {
  if (argv.mode === 'development') {
    config.devtool = 'eval-source-map';
  }

  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  }

  return config;
}
