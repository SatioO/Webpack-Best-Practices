const { clientCommon, PATHS } = require('./webpack.common');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientConfig = Object.assign({}, clientCommon, {
    entry: [
		"webpack-hot-middleware/client?name=client&path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false",        
        PATHS.CLIENT
    ],
    devServer: {
		contentBase: clientCommon.output.path,
		compress: true,
		port: 8080,
		disableHostCheck: true,
		host: "0.0.0.0",
        noInfo: false,
        hot:true,
		overlay: true
	},
    output: Object.assign({}, clientCommon.output, {
        filename: "[name].js",
		chunkFilename: "[name].js"
    }),
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: PATHS.SRC + '/index.html'
        }),
        new webpack.DefinePlugin({
			__DEV__: true,
			__PROD__: false,
			__SERVER__: false,
			__CLIENT__: true,
			"process.env.NODE_ENV": JSON.stringify("development")
		})
    ]
})

module.exports = clientConfig;