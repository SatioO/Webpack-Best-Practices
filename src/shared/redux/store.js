import { createStore, applyMiddleware, compose } from "redux"
import combinedReducer from "redux/reducers"
import thunkMiddleware from "redux-thunk"
import injectClientAndGetMiddleware from "./middlewares/promiseMiddleware"

export default function configureStore() {
	let composeStore

	if (__DEV__) {
		composeStore = compose(
			applyMiddleware(
				injectClientAndGetMiddleware(fetch),
				thunkMiddleware
			),
			typeof window === "object" &&
			typeof window.devToolsExtension !== "undefined"
				? window.devToolsExtension()
				: f => f
		)
	} else {
		composeStore = compose(
			applyMiddleware(
				injectClientAndGetMiddleware(fetch),
				thunkMiddleware
			)
		)
	}

	let store = createStore(combinedReducer, composeStore)

	return store
}
