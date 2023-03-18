const forge = require("node-forge");
const fs = require("fs");
const path = require("path");

function sha256(file) {
  const data = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
  const md = forge.md.sha256.create();
  md.update(data);
  return md.digest().toHex();
}

function hash_programs(context) {
  return {
    entrypoint: context.entrypoint,
    environment: context.environment,
    available: context.available.map(function (item) {
      try {
        return {
          name: item.name,
          program: item.program
            ? {
                url: item.program.url,
                sha256: sha256(item.program.url),
              }
            : undefined,
          locales: item.locales,
          props: item.props,
        };
      } catch (err) {
        return {
          name: item.name,
          program: item.program
            ? {
                url: item.program.url,
              }
            : undefined,
          locales: item.locales,
          props: item.props,
        };
      }
    }),
  };
}

let context_A = {
  available: [
    {
      name: "broken",
      program: {
        url: "/modules/broken/build/module/broken/main.min.js",
      },
      locales: {
        "en-US": "/modules/broken/build/module/broken/messages/en-US.json",
      },
      props: {},
    },
    {
      name: "self-state-ioc",
      program: {
        url: "/modules/self-state-ioc/build/module/self-state-ioc/main.min.js",
      },
      locales: {},
      props: {},
    },
    {
      name: "failing-saga-boundary",
      program: {
        url: "/modules/failing-saga-boundary/build/module/failing-saga-boundary/main.min.js",
      },
      locales: {},
      props: {},
    },
    {
      name: "simple",
      program: {
        url: "/modules/simple/build/module/simple/main.min.js",
      },
      locales: {
        "en-US": "/modules/simple/build/module/simple/messages/en-US.json",
      },
      props: {},
    },
    {
      name: "localisation",
      program: {
        url: "/modules/localisation/build/module/localisation/main.min.js",
      },
      locales: {
        "en-US": "/modules/localisation/build/module/localisation/messages/en-US.json",
        "cs-CZ": "/modules/localisation/build/module/localisation/messages/cs-CZ.json",
      },
      props: {},
    },
    {
      name: "layout",
      program: {
        url: "/modules/layout/build/module/layout/main.min.js",
      },
      locales: {
        "en-US": "/modules/layout/build/module/layout/messages/en-US.json",
      },
      props: {
        info: "Meta data info",
      },
    },
    {
      name: "routing",
      program: {
        url: "/modules/routing/build/module/routing/main.min.js",
      },
      locales: {
        "en-US": "/modules/routing/build/module/routing/messages/en-US.json",
      },
      props: {},
    },
    {
      name: "subrouting",
      program: {
        url: "/modules/subrouting/build/module/subrouting/main.min.js",
      },
      locales: {},
      props: {},
    },
  ],
  environment: {
    "context.name": "A",
  },
  entrypoint: "layout",
};

let context_B = {
  available: [
    {
      name: "localisation",
      program: {
        url: "/modules/localisation/build/module/localisation/main.min.js",
      },
      locales: {
        "en-US": "/modules/localisation/build/module/localisation/messages/en-US.json",
        "cs-CZ": "/modules/localisation/build/module/localisation/messages/cs-CZ.json",
      },
      meta: {},
    },
    {
      name: "self-state-ioc",
      program: {
        url: "/modules/self-state-ioc/build/module/self-state-ioc/main.min.js",
      },
      locales: {},
      props: {},
    },
    {
      name: "layout",
      program: {
        url: "/modules/layout/build/module/layout/main.min.js",
      },
      locales: {
        "en-US": "/modules/layout/build/module/layout/messages/en-US.json",
      },
      props: {
        info: "Meta data info",
      },
    },
  ],
  environment: {
    "context.name": "B",
  },
  entrypoint: "layout",
};

let context_C = {
  available: [
    {
      name: "layout",
      program: {
        url: "/modules/layout/build/module/layout/main.min.js",
      },
      locales: {
        "en-US": "/modules/layout/build/module/layout/messages/en-US.json",
      },
      props: {
        info: "Meta data info",
      },
    },
    {
      name: "routing",
      program: {
        url: "/modules/routing/build/module/routing/main.min.js",
      },
      locales: {
        "en-US": "/modules/routing/build/module/routing/messages/en-US.json",
      },
      props: {},
    },
    {
      name: "subrouting",
      program: {
        url: "/modules/subrouting/build/module/subrouting/main.min.js",
      },
      locales: {},
      props: {},
    },
  ],
  environment: {
    "context.name": "C",
  },
  entrypoint: "layout",
};

module.exports = (function () {
  const A = hash_programs(context_A);
  const B = hash_programs(context_B);
  const C = hash_programs(context_C);
  let selected = A;
  return {
    A,
    B,
    C,
  };
})();
