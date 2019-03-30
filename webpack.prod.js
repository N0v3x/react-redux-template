const merge = require("webpack-merge");
const common = require("./webpack.common");

const TerserPlugin = require("terser-webpack-plugin");
const CleanWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin(["dist"])],
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/,
        parallel: true,
        extractComments: "all"
      })
    ]
  }
});
