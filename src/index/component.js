import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../redux-main';

export default class Index extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
				<p>{this.props.state.index.content}</p>
			</main>
		)
	}
}
