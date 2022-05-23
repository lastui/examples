const config = require("@lastui/rocker/webpack/config/module.js");

config.entry = {
  broken: ["./modules/broken/src/index.js"],
  "failing-saga-boundary": ["./modules/failing-saga-boundary/src/index.js"],
  layout: ["./modules/layout/src/index.js"],
  localisation: ["./modules/localisation/src/index.js"],
  "self-state-ioc": ["./modules/self-state-ioc/src/index.js"],
  simple: ["./modules/simple/src/index.js"],
  routing: ["./modules/routing/src/index.js"],
  subrouting: ["./modules/subrouting/src/index.js"],
};

module.exports = config;
