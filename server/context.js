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
    },
    {
      name: "self-state-ioc",
      program: {
        url: "/modules/self-state-ioc/build/module/self-state-ioc/main.min.js",
      },
    },
    {
      name: "failing-saga-boundary",
      program: {
        url: "/modules/failing-saga-boundary/build/module/failing-saga-boundary/main.min.js",
      },
    },
    {
      name: "simple",
      program: {
        url: "/modules/simple/build/module/simple/main.min.js",
      },
      locales: {
        "en-US": "/modules/simple/build/module/simple/messages/en-US.json",
      },
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
    },
    {
      name: "subrouting",
      program: {
        url: "/modules/subrouting/build/module/subrouting/main.min.js",
      },
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
    },
    {
      name: "self-state-ioc",
      program: {
        url: "/modules/self-state-ioc/build/module/self-state-ioc/main.min.js",
      },
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
    },
    {
      name: "subrouting",
      program: {
        url: "/modules/subrouting/build/module/subrouting/main.min.js",
      },
    },
  ],
  environment: {
    "context.name": "C",
  },
  entrypoint: "layout",
};

module.exports = (function () {
  const A = context_A;
  const B = context_B;
  const C = context_C;
  let selected = A;
  return {
    A,
    B,
    C,
  };
})();
