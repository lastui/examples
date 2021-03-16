const path = require('path');
const webpack = require('webpack');

const settings = require('./node_modules/@lastui/rocker/webpack/settings');
const { Config } = require('webpack-config');

module.exports = new Config()
	.extend(path.resolve(settings.WEBPACK_ROOT_PATH, 'config/module.js'))
	.merge({
		entry: {
			main: ['./src/index.js'],
		},
	})



