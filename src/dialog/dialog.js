import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class DialogComp extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article className={ (this.props.dialog_id == this.props.id ) ? '' : 'hidden' }>
				<h1>{this.props.title}</h1>
			</article>
		)
	}
}

function mapStateToProps(state) {
	return { id: state.dialog.displayWithId }
}

let Dialog = connect(
	mapStateToProps
)(DialogComp);

export default Dialog;