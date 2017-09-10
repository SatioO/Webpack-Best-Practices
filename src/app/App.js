import React from "react"
import ReactDOM from "react-dom"
import { colored } from "style.less"

const App = () => {
	return <div className={colored}> {"Hello world"} </div>
}

ReactDOM.render(<App />, document.getElementById("root"))

export default App
