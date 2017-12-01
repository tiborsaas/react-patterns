import React from 'react';
import ReactDOM from 'react-dom';

function render() {
	const message = 'Hello world';

	ReactDOM.render(
		<div>
			<h1>{message}</h1>
		</div>,
		document.querySelector('#root')
	)
};

render();