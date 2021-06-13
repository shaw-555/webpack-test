// require 方法是用于引用 系统 提供的 方法，相对而言，import方法则是用于引入自己定义的对象和方法
// path在node modules
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "baga.js",
    path: path.resolve(__dirname, "./dist")
  },
  mode: "none"
}