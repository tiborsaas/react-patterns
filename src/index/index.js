import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../redux-main';
import { startFetch, displayDialog } from './actions';

export default class Index extends Component {

	constructor(props) {
		super(props);
		startFetch();
	}

	getValueByKey(key) {
		// return this.props.state.index[key];
		return [1,2,3];
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
				<button onClick={displayDialog('hello')}>Show hello dialog</button>
				<button onClick={displayDialog('bello')}>Show bello dialog</button>
			</main>
		)
	}
}
