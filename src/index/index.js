import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../redux-main';
import loadData from './actions';

export default class Index extends Component {

	constructor(props) {
		super(props);
		loadData();
	}

	getValueByKey(key) {
		// return this.props.state.index[key];
		return [1,2,3];
	}

	showHelloDialog() {
		store.dispatch({ type: 'DIALOG_SHOWN', id: 'hello' })
	}

	showBelloDialog() {
		store.dispatch({ type: 'DIALOG_SHOWN', id: 'bello' })
	}

	logger(e) {
		console.log('logging', e.target.value)
	}

	render() {
		return (
			<main>
				<p>{this.getValueByKey('content')}</p>
				<ul>{
					this.getValueByKey('repos').map( (repo, i) => {
						return <li key={i}>{i}</li>
					})
				}</ul>
				<input type="range" onChange={this.logger.bind(this)} min="0" max="5000" />
				<button onClick={this.showHelloDialog}>Show hello dialog</button>
				<button onClick={this.showBelloDialog}>Show bello dialog</button>
			</main>
		)
	}
}
