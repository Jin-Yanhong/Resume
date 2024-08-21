'use strict';
const path = require('path');
const { defineConfig } = require('@vue/cli-service');

function resolve(dir) {
	return path.join(__dirname, dir);
}

const port = 9000;

module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === 'production' ? '/Resume' : '/',
	transpileDependencies: true,
	productionSourceMap: false,
	devServer: {
		open: true,
		port: port,
		client: {
			overlay: false,
		},
		proxy: {
			'/api': {
				target: process.env.VUE_APP_BASE_API,
				changeOrigin: true,
				pathRewrite: {
					'^/api': 'api',
				},
			},
		},
	},
	configureWebpack: {
		devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
		performance: {
			hints: false,
		},
		optimization: {
			splitChunks: {
				minSize: 102400,
				maxSize: 2097152,
			},
		},
		resolve: {
			alias: {
				'@': resolve('/src'),
			},
		},
	},
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = process.env.VUE_APP_APP_NAME;
			return args;
		});
		config.plugin('define').tap(definitions => {
			Object.assign(definitions[0], {
				__VUE_OPTIONS_API__: 'true',
				__VUE_PROD_DEVTOOLS__: 'false',
				__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
			});
			return definitions;
		});
	},
});
