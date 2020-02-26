import React, { useState, useEffect } from 'react';

export default function PostsLoader() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(posts => setPosts(posts));
	}, []);

	return (
		<div>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
