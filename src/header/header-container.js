import { connect } from 'react-redux';
import Header from './header';

function mapStateToProps(state) {
	return { name: state.header.name }
}

function mapDispatchToProps(dispatch) {
	return { actions: function hello() {
		console.log(hello)
	} }
}

let HeaderContainer = connect(
	mapStateToProps
)(Header);

export default HeaderContainer;