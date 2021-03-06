const Dotenv = require('dotenv-webpack');

// eslint-disable-next-line no-unused-vars
export default (config, env, helpers, options) => {
	const [urlLoader] = helpers.getRulesByMatchingFile(config, '.svg');
	const { index: urlLoaderIndex } = urlLoader;

	config.module.rules[urlLoaderIndex] = {
		test: /\.(woff2?|ttf|eot|jpe?g|png|webp|gif|mp4|mov|ogg|webm)(\?.*)?$/i,
		loader: 'url-loader',
	};

	config.module.rules.unshift({
		test: /\.svg$/,
		loader: 'svg-inline-loader',
		options: {
			removeTags: true,
			removingTags: ['title', 'desc', 'defs', 'style'],
		},
	});
	if (config.devServer) {
		config.devServer = {
			...config.devServer,
			headers: {
				...config.devServer.headers,
				'Access-Control-Allow-Origin': '*',
			},
		};
	}
	if (env.production) {
		// config.output.publicPath = '/build/';
	}
	config.plugins.push(new Dotenv());
	config.resolve.modules.push(env.src); // babel-module-resolver
	config.node.process = true;
};
