const INITIAL_STATE = { count: 0 }

const counter = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "INCREMENT":
			console.log(action)
			return {
				...state,
				count: state.count + 1
			}

		case "DECREMENT":
			return {
				...state,
				count: state.count - 1
			}

		default:
			return {
				...state
			}
	}
}

export default counter
