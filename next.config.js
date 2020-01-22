const withSass = require("@zeit/next-sass");

const isDev = process.env.NODE_ENV === "dev";

const withSassConfig = {
	cssModules: true,
	cssLoaderOptions: {
		modules: true,
		importLoaders: 1,
		localIdentName: isDev ? "[name]__[local]--[hash:base64:5]" : "[sha1:hash:hex:4]"
	}
};

const nextConfig = {};

const config = {
	...withSassConfig,
	...nextConfig,
	webpack: webpackConfig => webpackConfig
};

module.exports = withSass(config);
