const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@convosco/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @convosco/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@convosco': {
			// @convosco/nativescript-braintree
			'nativescript-braintree': {
				build: {
					script: 'nx run nativescript-braintree:build.all',
					description: '@convosco/nativescript-braintree: Build',
				},
			},
			// @convosco/nativescript-shadowed-label
			'nativescript-shadowed-label': {
				build: {
					script: 'nx run nativescript-shadowed-label:build.all',
					description: '@convosco/nativescript-shadowed-label: Build',
				},
			},
			// @convosco/nativescript-urlhandler
			'nativescript-urlhandler': {
				build: {
					script: 'nx run nativescript-urlhandler:build.all',
					description: '@convosco/nativescript-urlhandler: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-braintree': {
				script: 'nx run nativescript-braintree:focus',
				description: 'Focus on @convosco/nativescript-braintree',
			},
			'nativescript-shadowed-label': {
				script: 'nx run nativescript-shadowed-label:focus',
				description: 'Focus on @convosco/nativescript-shadowed-label',
			},
			'nativescript-urlhandler': {
				script: 'nx run nativescript-urlhandler:focus',
				description: 'Focus on @convosco/nativescript-urlhandler',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
