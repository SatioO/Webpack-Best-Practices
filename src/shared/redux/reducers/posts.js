const INITIAL_STATE = { posts: [] }

const posts = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_POSTS":
			return {
				...state,
				posts: action.payload
			}

		default:
			return {
				...state
			}
	}
}

export default posts
