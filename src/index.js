import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './redux-main';
import App from './app';

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
	document.getElementById('root'))
}

store.subscribe(render);

render();
