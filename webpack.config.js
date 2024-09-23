
function getModuleConfig() {
  return {
    ...require("@lastui/rocker/webpack/config/module"),
    entry: {
      broken: ["./modules/broken/src/index.js"],
      "failing-saga-boundary": ["./modules/failing-saga-boundary/src/index.js"],
      layout: ["./modules/layout/src/index.js"],
      localisation: ["./modules/localisation/src/index.js"],
      "self-state-ioc": ["./modules/self-state-ioc/src/index.js"],
      simple: ["./modules/simple/src/index.js"],
      routing: ["./modules/routing/src/index.js"],
      subrouting: ["./modules/subrouting/src/index.js"],
      trivial: ["./modules/trivial/src/index.js"],
    },
  };
}

function getSpaConfig() {
  return {
    ...require("@lastui/rocker/webpack/config/spa"),
    entry: {
      main: ["./spa/src/index.js"],
    }
  };
}

const config = [];

config.push(getModuleConfig());

if (process.env.NODE_ENV !== 'development') {
  config.push(getSpaConfig());
}


module.exports = config;