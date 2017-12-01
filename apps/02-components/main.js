import React from 'react';
import ReactDOM from 'react-dom';
import Body from './body';
// import Footer from './problem';

function render() {
	const message = 'Components';

	ReactDOM.render(
		<div>
			<h1>{message}</h1>
			<Body/>
			{/* <Footer/> */}
		</div>,
		document.querySelector('#root')
	)
};

render();