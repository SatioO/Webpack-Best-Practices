import { h } from "preact"
import { connect } from "preact-redux"
import { incrementCount, decrementCount } from "actions"
import { Counter } from "Counter"

const App = ({ count, decrement, increment }) => {
	return (
		<div>
			<Counter
				count={count}
				decrement={decrement}
				increment={increment}
			/>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		count: state.counter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch(incrementCount()),
		decrement: () => dispatch(decrementCount())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
