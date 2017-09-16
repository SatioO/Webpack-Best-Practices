import { createStore, applyMiddleware, compose } from "redux"
import counterApp from "reducers"
import thunkMiddleware from "redux-thunk"

let composeStore

if (__DEV__) {
	composeStore = compose(
		applyMiddleware(thunkMiddleware),
		typeof window === "object" &&
		typeof window.devToolsExtension !== "undefined"
			? window.devToolsExtension()
			: f => f
	)
} else {
	composeStore = compose(applyMiddleware(thunkMiddleware))
}

let store = createStore(counterApp, composeStore)

export default store
