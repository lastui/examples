const express = require("express");
const fs = require("fs");
const path = require("path");

const contexts = require("./context");

let page_views = 0;

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
  page_views = (page_views + 1) % 3;
  switch (page_views) {
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
  app.get("/context", context);
  app.use("/spa", express.static(path.join(__dirname, "..", "spa", "build", "spa")));
  app.get("/*", asset);
  app.use(express.json);
  return app;
};
