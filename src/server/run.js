const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware")
const clientConfigDev = require("../../webpack/webpack.client.js")
const publicPath = clientConfigDev.output.publicPath
const outputPath = clientConfigDev.output.path
const app = express();

let isBuilt = false;

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
    });

if (process.env.NODE_ENV === "development") {
    console.log('inside dev');
    const compiler = webpack([clientConfigDev])
    const clientCompiler = compiler.compilers[0]
    const options = { publicPath, stats: { colors: true } }

    app.use(webpackDevMiddleware(compiler, options))
    app.use(webpackHotMiddleware(clientCompiler))
    compiler.plugin("done", done)
} else {
    console.log('inside prod')
}
