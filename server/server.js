const path = require('path');
const fs = require('fs');
const express = require('express');

async function index(req, res) {
	const filePath = path.join(__dirname, '../spa/build/index.html');
	if (!fs.existsSync(filePath)) {
		return res.status(404);
	}
	return res.sendFile(filePath);
}

function file(filePath) {
	return async function (req, res) {
		console.log('in asset', req.url);
		if (!fs.existsSync(filePath)) {
			return res.status(404);
		}
		return res.sendFile(filePath);
	}
}

async function asset(req, res) {
	if (path.extname(req.url).length === 0) {
		return await index(req,res)
	} else {
		return await file(path.join(__dirname, '..', req.url))(req, res);
	}
}

async function context(req, res) {
	return res.json({
		available: [
			{
				name: 'broken',
				url: 'examples/broken/build/main.min.js',
			},
			{
				name: 'simple',
				url: 'examples/simple/build/main.min.js',
			},
			{
				name: 'localisation',
				url: 'examples/localisation/build/main.min.js',
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
	app.get('/dependencies.dll.min.js', file(path.join(__dirname, '../spa/build/dependencies.dll.min.js')));
	app.get('/platform.dll.min.js', file(path.join(__dirname, '../spa/build/platform.dll.min.js')));
	app.get('/runtime.dll.min.js', file(path.join(__dirname, '../spa/build/runtime.dll.min.js')));
	app.get('/main.js', file(path.join(__dirname, '../spa/build/main.js')));
	app.get('/*', asset);
	app.use(express.json);
	return app;
}