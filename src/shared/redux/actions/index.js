export const getPosts = () => {
	return {
		type: "GET_POSTS",
		promise: client => client("https://jsonplaceholder.typicode.com/posts")
	}
}
