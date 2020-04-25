const path = require("path");
module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 出口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
