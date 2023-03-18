const path = require("path");
const fs = require("fs");
const express = require("express");
const contexts = require("./context");
const cookieParser = require("cookie-parser");
const session = require("express-session");

async function index(req, res) {
  const filePath = path.join(__dirname, "../spa/build/spa/index.html");
  if (!fs.existsSync(filePath)) {
    return res.status(404);
  }
  return res.sendFile(filePath);
}

function file(filePath) {
  return async function (req, res) {
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }
    console.log("not found", filePath);
    // intentional timeout
  };
}

async function asset(req, res) {
  if (path.extname(req.url).length === 0) {
    return await index(req, res);
  } else {
    return await file(path.join(__dirname, "..", req.url))(req, res);
  }
}

async function context(req, res) {
  req.session.page_views = (req.session.page_views + 1) % 3;
  switch (req.session.page_views) {
    case 0:
      return res.json(contexts.A);
    case 1:
      return res.json(contexts.B);
    default:
      return res.json(contexts.C);
  }
}

module.exports = function (existing) {
  const app = existing || express();
  app.use(cookieParser());
  app.use(session({ secret: "Shh, its a secret!" }));
  app.get("/context", context);
  app.get("/spa/dependencies.dll.min.js", file(path.join(__dirname, "../spa/build/spa/dependencies.dll.min.js")));
  app.get("/spa/platform.dll.min.js", file(path.join(__dirname, "../spa/build/spa/platform.dll.min.js")));
  app.get("/spa/bootstrap.dll.min.js", file(path.join(__dirname, "../spa/build/spa/bootstrap.dll.min.js")));
  app.get("/spa/main.min.js", file(path.join(__dirname, "../spa/build/spa/main.min.js")));
  app.get("/spa/main.css", file(path.join(__dirname, "../spa/build/spa/main.css")));
  app.get("/*", asset);
  app.use(express.json);
  return app;
};
