import { h, Component } from "preact"
import { connect } from "preact-redux"
import { Posts } from "Posts"
import * as postActions from "redux/actions"

@connect(state => ({ totalposts: state.posts }), postActions)
export default class App extends Component {
	constructor() {
		super()
	}

	//Best Practices
	componentWillMount() {
		this.props.getPosts()
	}

	shouldComponentUpdate() {
		return this.props.posts
	}

	render() {
		const { totalposts } = this.props
		return (
			<div>
				<Posts postitems={totalposts.posts} />
			</div>
		)
	}
}