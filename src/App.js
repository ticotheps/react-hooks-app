import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import PostsLoader from './components/postsLoader/PostsLoader';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Button />
				<PostsLoader />
			</header>
		</div>
	);
}

export default App;
