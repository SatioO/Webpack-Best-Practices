import { h, render } from "preact"
let root = document.getElementById("root").lastElementChild

function init() {
	const App = require("App").default
	root = render(<App />, document.getElementById("root"), root)
}

if (module.hot) {
	module.hot.accept("App", () => {
		window.requestAnimationFrame(init)
	})
}

init()
