# Examples

[![Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/rocker-examples-nvqbev)

### To run the examples

```bash
npm install
npm start
```

### To upgrade to latest

```bash
npm run upgrade
```

### To develop a module

all at same time (multi-entry development)

```bash
npm start
```

single module (single-entry development)

```bash
cd modules/simple
npm start
```

or

```bash
npm start -- --cwd=modules/simple
```

### To build a module

```bash
cd modules/simple
npm run build
```