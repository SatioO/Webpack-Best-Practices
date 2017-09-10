const express = require("express")
const webpack = require("webpack")
const expressStaticGzip = require("express-static-gzip")
const noFavicon = require("express-no-favicons")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const clientConfigDev = require("../../webpack/client.dev")
const clientConfigProd = require("../../webpack/client.prod")
const publicPath = clientConfigDev.output.publicPath
const outputPath = clientConfigDev.output.path
const app = express()

let isBuilt = false

app.use(noFavicon())

const done = () =>
	!isBuilt &&
	app.listen(process.env.PORT, () => {
		isBuilt = true
		// eslint-disable-next-line no-console
		console.log(
			"Build complete -- Listening @ localhost:",
			process.env.PORT,
			"\nNODE_ENV: ",
			process.env.NODE_ENV
		)
	})

if (process.env.NODE_ENV === "development") {
	// eslint-disable-next-line no-console
	console.log("inside dev")
	const compiler = webpack([clientConfigDev])
	const clientCompiler = compiler.compilers[0]
	const options = { publicPath, stats: { colors: true } }

	app.use(webpackDevMiddleware(compiler, options))
	app.use(webpackHotMiddleware(clientCompiler))
	compiler.plugin("done", done)
} else {
	// eslint-disable-next-line no-console
	console.log("inside prod")
	webpack([clientConfigProd]).run((err, stats) => {
		// const clientStats = stats.toJson().children[0]
		// const serverRender = require("../../build/main.js").default
		app.use(
			publicPath,
			expressStaticGzip(outputPath, { enableBrotli: false })
		)
		// app.use(serverRender({ clientStats }))
		done()
	})
}
