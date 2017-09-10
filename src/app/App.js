import { h, render } from "preact"

function App() {
	return <div>{"Hello World"}</div>
}

render(<App />, document.querySelector("#root"))

export default App
