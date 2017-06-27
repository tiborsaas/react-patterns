import { createStore } from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './redux-main';
import App from './app';

function render() {
	ReactDOM.render(<App state={store.getState()} />, 
	document.getElementById('root'))
}

store.subscribe(render);

render();
