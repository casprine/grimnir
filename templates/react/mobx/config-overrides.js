const rewireMobX = require('react-app-rewire-mobx');
const { injectBabelPlugin } = require('react-app-rewired');
const Dotenv = require('dotenv-webpack');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  config = injectBabelPlugin('babel-plugin-styled-components', config);

  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new Dotenv());
  return config;
};
