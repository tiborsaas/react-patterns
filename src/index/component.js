import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../redux-main';

export default class Index extends Component {

	constructor(props) {
		super(props);
	}

	getValueByKey(key) {
		return this.props.state.index[key];
	}

	render() {
		return (
			<main>
				<p>{this.getValueByKey('content')}</p>
			</main>
		)
	}
}
