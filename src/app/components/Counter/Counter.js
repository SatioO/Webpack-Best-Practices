import { h } from "preact"

const Counter = ({ count, decrement, increment }) => {
	return (
		<div>
			<h1>{count.count}</h1>
			<button onClick={increment}>{"Increment"}</button>
			<button onClick={decrement}>{"Decrement"}</button>
		</div>
	)
}

export default Counter
