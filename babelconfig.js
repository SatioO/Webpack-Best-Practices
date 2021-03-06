module.exports = () => {
	return {
		presets: [
			[
				"env",
				{
					targets: {
						browsers: ["> 5% in IN"],
						node: "8.4.0"
					},
					modules: false
				}
			]
		],
		plugins: [
			"syntax-dynamic-import",
			"universal-import",
			"transform-decorators-legacy",
			"transform-class-properties",
			"babel-plugin-transform-object-rest-spread",
			"transform-runtime",
			["transform-react-jsx", { pragma: "h" }],
			[
				"module-resolver",
				{
					root: ["./src"],
					alias: {
						react: "preact-compat",
						"react-dom": "preact-compat"
					}
				}
			]
		],
		env: {
			production: {
				plugins: ["transform-react-remove-prop-types"]
			}
		}
	}
}
