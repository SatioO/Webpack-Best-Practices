import { combineReducers } from "redux"
import counter from "./counter"
import posts from "./posts"

const combinedReducer = combineReducers({
	counter,
	posts
})

export default combinedReducer
