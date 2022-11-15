import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';


const config: UserConfig = {
	plugins: [sveltekit()],
	// *****  Needed for RXDB DevModePlugin
	// resolve: {
	// 	alias: {
	// 		events: 'rollup-plugin-node-polyfills/polyfills/events',
	// 		process: 'rollup-plugin-node-polyfills/polyfills/process'
	// 	}
	// },
	// define: {
	// 	global: 'window',
	// 	process: { env: {} }
	// },
	optimizeDeps: {
		esbuildOptions: {
			plugins: [NodeModulesPolyfillPlugin()]
		},
		// exclude: ['rxdb/plugins/memory']
	}
	// *****  Needed for RXDB DevModePlugin
};

export default config;
