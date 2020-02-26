import React from 'react';
import useFetch from './useFetch';

export default function PostsLoader(props) {
	const data = useFetch('https://jsonplaceholder.typicode.com/posts');

	return (
		<div>
			<ul>
				{data.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
