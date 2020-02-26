import React, { useState } from 'react';

export default function Button() {
	const [buttonText, setButtonText] = useState('Click me, please');

	// return (
	// 	<button onClick={() => setButtonText('Thanks, been clicked!')}>
	// 		{buttonText}
	// 	</button>
	// );

	function handleClick() {
		return setButtonText('Thanks, been clicked!');
	}

	return <button onClick={handleClick}>{buttonText}</button>;
}
