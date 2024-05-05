const merge = require('webpack-merge');

const resolveConfig = require('./webpack.config.resolve');
const prodConfig = require('../../../../scripts/webpack/webpack.config.prod');

module.exports = merge(resolveConfig, prodConfig);
