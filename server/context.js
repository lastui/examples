let context_A = {
  available: [
    {
      name: "broken",
      program: {
        url: "/build/module/broken/main.min.js",
      },
      locales: {
        "en-US": "/build/module/broken/messages/en-US.json",
      },
    },
    {
      name: "self-state-ioc",
      program: {
        url: "/build/module/self-state-ioc/main.min.js",
      },
    },
    {
      name: "failing-saga-boundary",
      program: {
        url: "/build/module/failing-saga-boundary/main.min.js",
      },
    },
    {
      name: "simple",
      program: {
        url: "/build/module/simple/main.min.js",
      },
      locales: {
        "en-US": "/build/module/simple/messages/en-US.json",
      },
    },
    {
      name: "localisation",
      program: {
        url: "build/module/localisation/main.min.js",
      },
      locales: {
        "en-US": "/build/module/localisation/messages/en-US.json",
        "cs-CZ": "/build/module/localisation/messages/cs-CZ.json",
      },
    },
    {
      name: "layout",
      program: {
        url: "/build/module/layout/main.min.js",
      },
      locales: {
        "en-US": "/build/module/layout/messages/en-US.json",
      },
      props: {
        info: "Meta data info",
      },
    },
    {
      name: "routing",
      program: {
        url: "/build/module/routing/main.min.js",
      },
      locales: {
        "en-US": "/build/module/routing/messages/en-US.json",
      },
    },
    {
      name: "subrouting",
      program: {
        url: "/build/module/subrouting/main.min.js",
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
        url: "/build/module/localisation/main.min.js",
      },
      locales: {
        "en-US": "/build/module/localisation/messages/en-US.json",
        "cs-CZ": "/build/module/localisation/messages/cs-CZ.json",
      },
    },
    {
      name: "self-state-ioc",
      program: {
        url: "/build/module/self-state-ioc/main.min.js",
      },
    },
    {
      name: "layout",
      program: {
        url: "/build/module/layout/main.min.js",
      },
      locales: {
        "en-US": "/build/module/layout/messages/en-US.json",
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
        url: "/build/module/layout/main.min.js",
      },
      locales: {
        "en-US": "/build/module/layout/messages/en-US.json",
      },
      props: {
        info: "Meta data info",
      },
    },
    {
      name: "routing",
      program: {
        url: "/build/module/routing/main.min.js",
      },
      locales: {
        "en-US": "/build/module/routing/messages/en-US.json",
      },
    },
    {
      name: "subrouting",
      program: {
        url: "/build/module/subrouting/main.min.js",
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
