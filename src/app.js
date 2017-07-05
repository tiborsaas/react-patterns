import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import HeaderContainer from './header/header-container';
import Index from './index/index';
import Dialog from './dialog/dialog';

export default class App extends Component {

	constructor(props) {
		super(props);
	}

	kill() {
		console.log('killed things on app.js')
	}

	render() {
		return (
			<div>
				<HeaderContainer />
				<Index />
				<Dialog title="Hello text" dialog_id="hello" />
				<Dialog title="Bello text" dialog_id="bello" />
			</div>
		)
	}
}
