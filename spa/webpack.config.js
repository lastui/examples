const path = require('path');

const settings = require('./node_modules/@lastui/rocker/webpack/settings');

const config = require(path.resolve(settings.WEBPACK_ROOT_PATH, 'config/spa.js'));

config.entry = {
	main: ['./src/index.js'],
}

module.exports = config;