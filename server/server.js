const path = require('path');
const fs = require('fs');
const express = require('express');

async function index(req, res) {
	console.log('in index', req.url);
	const filePath = path.join(__dirname, '../runtime/index.html');
	if (!fs.existsSync(filePath)) {
		return res.status(404);
	}
	return res.sendFile(filePath);
}

async function asset(req, res) {
	console.log('in asset', req.url);
	const filePath = path.join(__dirname, '../runtime', req.url);
	if (!fs.existsSync(filePath)) {
		return index(req, res);

	}
	return res.sendFile(filePath);
}

async function context(req, res) {
	console.log('in context', req.url);
	return res.json({
		available: [],
		entrypoint: {},
	})
}

module.exports = function(existing) {
	const app = existing || express();
	app.get('/', index);
	app.get('/context', context);
	app.get('/*', asset);
	app.use(express.json);
	return app;
}