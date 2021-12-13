const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new dotenv({
      path: "./dev.env",
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    stats: "errors-only",
  },
});
