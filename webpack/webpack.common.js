const { join, sep } = require("path")
const babelConfig = require("../babelconfig")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

const joinPath = src => join(__dirname, "..", src)

const PATHS = {
	NODE_MODULES: joinPath("node_modules"),
	SRC: joinPath("src"),
	SHARED: joinPath(`src${sep}shared`),
	COMPONENTS: joinPath(`src${sep}shared${sep}components`),
	CONTAINERS: joinPath(`src${sep}shared${sep}containers`),
	CLIENT: joinPath(`src${sep}client`),
	SERVER: joinPath(`src${sep}server`),
	PUBLIC: joinPath("public")
}

const commonConfig = {
	context: PATHS.SRC,
	resolve: {
		extensions: [".js", ".jsx", ".css", ".less", ".json"],
		alias: {
			react: "preact-compat",
			"react-dom": "preact-compat"
		},
		modules: [
			PATHS.SHARED,
			PATHS.CLIENT,
			PATHS.SERVER,
			PATHS.NODE_MODULES,
			PATHS.COMPONENTS,
			PATHS.CONTAINERS
		]
	}
}

const clientCommon = Object.assign({}, commonConfig, {
	name: "client",
	target: "web",
	devtool: "eval",
	output: {
		path: PATHS.PUBLIC,
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: Object.assign(babelConfig(true), {
						cacheDirectory: true
					})
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: ExtractCssChunks.extract({
					use: [
						{
							loader: "css-loader",
							options: {
								minimize: true,
								modules: true,
								localIdentName:
									"[name]__[local]--[hash:base64:5]"
							}
						},
						{
							loader: "less-loader",
							options: {
								strictMath: true,
								noIeCompat: true,
								lint: true,
								strictImports: true,
								strictUnits: true
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				use: ExtractCssChunks.extract({
					use: [
						{
							loader: "css-loader",
							options: {
								modules: true,
								localIdentName:
									"[name]__[local]--[hash:base64:5]"
							}
						}
					]
				})
			}
		]
	}
})

module.exports = { clientCommon, PATHS }
