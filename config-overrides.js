const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets",
    "@components": "src/components",
    "@routes": "src/routes",
    "@screens": "src/screens",
    "@services": "src/services",
    "@store": "src/store",
    "@utils": "src/utils",
  })(config);

  return config;
};
