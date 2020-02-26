import React, { Component } from 'react';

export default class postsLoader extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(posts =>
				this.setState(() => {
					return { posts };
				})
			);
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.posts.map(post => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	}
}
