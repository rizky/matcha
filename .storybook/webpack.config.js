const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve = {
    modules: [
      "node_modules",
      path.resolve('./'),
    ],
    extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"],
    alias: {
      "react-native": "react-native-web"
    }
  };
  storybookBaseConfig.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(react-native-elements|react-native-vector-icons)\/).*/,
        loader: 'babel-loader'
      },
    ],
  }
  return storybookBaseConfig;
};

