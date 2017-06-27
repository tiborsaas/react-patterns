import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../redux-main';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}

	standUp() {
		store.dispatch({ type: 'HEADER:STANDUP' });
	}

	render() {
		return (
			<header>
				<h1>{this.props.state.header.name}</h1>
				<button onClick={this.standUp}>Stand up</button>
			</header>
		)
	}
}