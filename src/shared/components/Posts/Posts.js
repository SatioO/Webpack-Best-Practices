import { h } from "preact"

const Posts = ({ postitems }) => {
	return (
		<div>
			{postitems.map(item => {
				return (
					<div key={item.id}>
						<p>{item.title}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Posts
