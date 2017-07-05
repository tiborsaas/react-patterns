import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}

	standUp() {
		this.props.dispatch({ type: 'HEADER:STANDUP' });
	}

	render() {
		return (
			<header>
				<h1>{this.props.name}</h1>
				<button onClick={this.standUp.bind(this)}>Stand up</button>
			</header>
		)
	}
}