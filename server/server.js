const path = require('path');
const fs = require('fs');
const express = require('express');

let start_time = Date.now()

let context_A = {
	available: [
		{
			id: 'broken',
			program: '/examples/broken/build/main.min.js',
			locales: {
				'en-US': 'examples/broken/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'simple',
			program: '/examples/simple/build/main.min.js',
			locales: {
				'en-US': 'examples/simple/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'localisation',
			program: '/examples/localisation/build/main.min.js',
			locales: {
				'en-US': 'examples/localisation/build/messages/en-US.json',
				'cs-CZ': 'examples/localisation/build/messages/cs-CZ.json',
			},
			meta: {},
		},
		{
			id: 'layout',
			program: '/examples/layout/build/main.min.js',
			locales: {
				'en-US': 'examples/layout/build/messages/en-US.json',
			},
			meta: {
				info: 'Meta data info',
			},
		},
		{
			id: 'routing',
			program: '/examples/routing/build/main.min.js',
			locales: {
				'en-US': 'examples/routing/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'subrouting',
			program: 'examples/subrouting/build/main.min.js',
			locales: {},
			meta: {},
		},
	],
	entrypoint: 'layout',
}

let context_B = {
	available: [
		{
			id: 'localisation',
			program: '/examples/localisation/build/main.min.js',
			locales: {
				'en-US': 'examples/localisation/build/messages/en-US.json',
				'cs-CZ': 'examples/localisation/build/messages/cs-CZ.json',
			},
			meta: {},
		},
		{
			id: 'layout',
			program: '/examples/layout/build/main.min.js',
			locales: {
				'en-US': 'examples/layout/build/messages/en-US.json',
			},
			meta: {
				info: 'Meta data info',
			},
		}
	],
	entrypoint: 'layout',
}

let context_C = {
	available: [
		{
			id: 'layout',
			program: '/examples/layout/build/main.min.js',
			locales: {
				'en-US': 'examples/layout/build/messages/en-US.json',
			},
			meta: {
				info: 'Meta data info',
			},
		},
		{
			id: 'routing',
			program: '/examples/routing/build/main.min.js',
			locales: {
				'en-US': 'examples/routing/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'subrouting',
			program: '/examples/subrouting/build/main.min.js',
			locales: {},
			meta: {},
		},
	],
	entrypoint: 'layout',
}

async function index(req, res) {
	const filePath = path.join(__dirname, '../spa/build/index.html');
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
	return res.json(context_A)

	/*
	const now = Date.now()
	let elapsed = now - start_time
	if (elapsed > 15000) {
		start_time = now
		elapsed = 0
	}
	return res.json(elapsed === 0 ? context_B : context_A)
	*/
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