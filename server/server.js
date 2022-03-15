const path = require('path');
const fs = require('fs');
const express = require('express');
const contexts = require('./context');

let counter = 0

async function index(req, res) {
	const filePath = path.join(__dirname, '../spa/build/spa/index.html');
	if (!fs.existsSync(filePath)) {
		return res.status(404);
	}
	return res.sendFile(filePath);
}

function file(filePath) {
	return async function (req, res) {
		if (!fs.existsSync(filePath)) {
			return res.status(404);
		}
		return res.sendFile(filePath);
	}
}

async function asset(req, res) {
	if (path.extname(req.url).length === 0) {
		return await index(req, res)
	} else {
		return await file(path.join(__dirname, '..', req.url))(req, res);
	}
}

async function context(req, res) {
	contexts.current = counter
	counter = (counter + 1) % 3
	return res.json(contexts.current)
}

module.exports = function(existing) {
	const app = existing || express();
	app.get('/context', context);
	app.get('/spa/dependencies.dll.min.js', file(path.join(__dirname, '../spa/build/spa/dependencies.dll.min.js')));
	app.get('/spa/platform.dll.min.js', file(path.join(__dirname, '../spa/build/spa/platform.dll.min.js')));
	app.get('/spa/bootstrap.dll.min.js', file(path.join(__dirname, '../spa/build/spa/bootstrap.dll.min.js')));
	app.get('/spa/main.min.js', file(path.join(__dirname, '../spa/build/spa/main.min.js')));
	app.get('/*', asset);
	app.use(express.json);
	return app;
}