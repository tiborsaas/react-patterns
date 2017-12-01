import React, { Component } from 'react';

export default class Body extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
                <p>This text is now embedded in a React component referred to as Body. The index.html is now only a single div with the root div.</p>
                <p>Cool ideas:</p>
                <ul>
                    <li>Buy milk</li>
                    <li>Find a goal</li>
                    <li>Earn money</li>
                    <li>Die</li>
                </ul>
                <h3>Assignment</h3>
                <p>Uncomment line 4 and remove the curly braces and the /* */ around the Footer component.</p>
			</div>
		)
	}
}