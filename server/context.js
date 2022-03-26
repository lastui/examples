const forge = require('node-forge');
const fs = require('fs');
const path = require('path');

function sha256(file) {
	const data = fs.readFileSync(path.join(__dirname, '..', file), 'utf8')
	const md = forge.md.sha256.create();
	md.update(data);
	return md.digest().toHex()
}

function hash_programs(context) {
	return {
		entrypoint: context.entrypoint,
		available: context.available.map(function(item) {
			return {
				id: item.id,
				program: item.program ? {
					url: item.program.url,
					sha256: sha256(item.program.url),
				} : undefined,
				locales: item.locales,
				meta: item.meta,
			}
		})
	}
}


let context_A = {
	available: [
		{
			id: 'broken',
			program: {
				url: '/modules/broken/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/broken/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'self-state-ioc',
			program: {
				url: '/modules/self-state-ioc/build/main.min.js'
			},
			locales: {},
			meta: {},
		},
		{
			id: 'failing-saga-boundary',
			program: {
				url: '/modules/failing-saga-boundary/build/main.min.js'
			},
			locales: {},
			meta: {},
		},
		{
			id: 'simple',
			program: {
				url: '/modules/simple/build/main.min.js',
			},
			locales: {
				'en-US': '/modules/simple/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'localisation',
			program: {
				url: '/modules/localisation/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/localisation/build/messages/en-US.json',
				'cs-CZ': '/modules/localisation/build/messages/cs-CZ.json',
			},
			meta: {},
		},
		{
			id: 'layout',
			program: {
				url: '/modules/layout/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/layout/build/messages/en-US.json',
			},
			meta: {
				info: 'Meta data info',
			},
		},
		{
			id: 'routing',
			program: {
				url: '/modules/routing/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/routing/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'subrouting',
			program: {
				url: '/modules/subrouting/build/main.min.js',
			},
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
			program: {
				url: '/modules/localisation/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/localisation/build/messages/en-US.json',
				'cs-CZ': '/modules/localisation/build/messages/cs-CZ.json',
			},
			meta: {},
		},
		{
			id: 'self-state-ioc',
			program: {
				url: '/modules/self-state-ioc/build/main.min.js'
			},
			locales: {},
			meta: {},
		},
		{
			id: 'layout',
			program: {
				url: '/modules/layout/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/layout/build/messages/en-US.json',
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
			program: {
				url: '/modules/layout/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/layout/build/messages/en-US.json',
			},
			meta: {
				info: 'Meta data info',
			},
		},
		{
			id: 'routing',
			program: {
				url: '/modules/routing/build/main.min.js'
			},
			locales: {
				'en-US': '/modules/routing/build/messages/en-US.json',
			},
			meta: {},
		},
		{
			id: 'subrouting',
			program: {
				url: '/modules/subrouting/build/main.min.js'
			},
			locales: {},
			meta: {},
		},
	],
	entrypoint: 'layout',
}

module.exports = (function() {
	const A = hash_programs(context_A)
	const B = hash_programs(context_B)
	const C = hash_programs(context_C)
	let selected = A
	return {
		A,
		B,
		C,
	}
})()