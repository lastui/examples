const path = require('path');
const fs = require('fs');
const express = require('express');

async function index(req, res) {
	const filePath = path.join(__dirname, '../runtime/index.html');
	if (!fs.existsSync(filePath)) {
		return res.status(404);
	}
	return res.sendFile(filePath);
}

async function asset(req, res) {
	console.log('in asset', req.url);
	const filePath = path.join(__dirname, '..', req.url);
	if (!fs.existsSync(filePath)) {
		return index(req, res);
	}
	return res.sendFile(filePath);
}

async function context(req, res) {
	return res.json({
		available: [
			{
				name: 'simple',
				url: 'examples/simple/build/main.min.js',
			},
			{
				name: 'layout',
				url: 'examples/layout/build/main.min.js',
			},
			{
				name: 'routing',
				url: 'examples/routing/build/main.min.js',
			}
		],
		entrypoint: 'layout',
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