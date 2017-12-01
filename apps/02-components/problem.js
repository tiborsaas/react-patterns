import React, { Component } from 'react';

export default class Body extends Component {

	constructor(props) {
		super(props);
	}

	/**
	 * This will fail, but can you figure out why?
	 */
	render() {
		return (
			<footer>Copyright</footer>
			<a href="/">Message me</a>
		)
	}
}