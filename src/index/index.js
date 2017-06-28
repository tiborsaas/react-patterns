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
		return this.props.state.index[key];
	}

	lowerIt() {
		store.dispatch({ type: 'INDEX:LOWERCASED' })
	}

	render() {
		return (
			<main>
				<p>{this.getValueByKey('content')}</p>
				<ul>{
					this.getValueByKey('repos').map( (repo, i) => {
						return <li key={i}>{repo.username}</li>
					})
				}</ul>
				<button onClick={this.lowerIt}>Make it lowercase</button>
			</main>
		)
	}
}
