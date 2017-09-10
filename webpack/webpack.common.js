const { join, sep } = require("path")
const babelConfig = require("../babelconfig")

const joinPath = src => join(__dirname, "..", src)

const PATHS = {
	NODE_MODULES: joinPath("node_modules"),
	SRC: joinPath("src"),
	APP: joinPath(`src${sep}app`),
	CLIENT: joinPath(`src${sep}client`),
	SERVER: joinPath(`src${sep}server`),
	PUBLIC: joinPath("public")
}

const commonConfig = {
	context: PATHS.SRC,
	resolve: {
		extensions: [".js", ".jsx", ".css", ".less", ".json"],
		modules: [PATHS.APP, PATHS.CLIENT, PATHS.SERVER, PATHS.NODE_MODULES]
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
			}
		]
	}
})

module.exports = { clientCommon, PATHS }
