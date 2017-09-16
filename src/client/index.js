import { h, render } from "preact"
// Redux Logic
import { Provider } from "preact-redux"
import store from "store"

let root = document.getElementById("root").lastElementChild

function init() {
	const App = require("App").default
	root = render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById("root"),
		root
	)
}

if (module.hot) {
	module.hot.accept("App", () => {
		window.requestAnimationFrame(init)
	})
}

init()
