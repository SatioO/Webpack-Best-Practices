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
			"transform-runtime",
			["transform-react-jsx"],
			[
				"module-resolver",
				{
					root: ["./src"]
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