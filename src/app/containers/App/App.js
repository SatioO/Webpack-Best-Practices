import { h, Component } from "preact"
import { connect } from "preact-redux"
import { incrementCount, decrementCount } from "actions"
import { Counter } from "Counter"

class App extends Component {
	constructor() {
		super()
	}

	shouldComponentUpdate() {
		return true
	}

	increment = () => {
		this.props.dispatch(incrementCount())
	}

	decrement = () => {
		this.props.dispatch(decrementCount())
	}

	render() {
		const { count } = this.props
		return (
			<div>
				<Counter
					count={count}
					decrement={this.decrement}
					increment={this.increment}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		count: state.counter
	}
}

export default connect(mapStateToProps)(App)
