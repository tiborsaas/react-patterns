import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header/component';
import Index from './index/component';

export default class App extends Component {

	constructor(props) {
		super(props);
		console.log('Redux state', props.state);
	}

	kill() {
		console.log('killed things on app.js')
	}

	render() {
		return (
			<div>
				<Header state={this.props.state} />
				<Index state={this.props.state} />
			</div>
		)
	}
}
