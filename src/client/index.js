import { h, render } from "preact"
// Redux Logic
import { Provider } from "preact-redux"
import { createStore } from "redux"
import counterApp from "reducers"

let store = createStore(counterApp)

let root = document.getElementById("root").lastElementChild

function init() {
	const App = require("containers/App").default
	root = render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById("root"),
		root
	)
}

if (module.hot) {
	module.hot.accept("containers/App", () => {
		window.requestAnimationFrame(init)
	})
}

init()
