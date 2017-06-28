import store from '../redux-main';

export default function loadServerData(forPerson) {
	return function (dispatch) {
		return fetch('http://equal-koala.glitch.me/game/8').then(
			response => {
			response.json().then( rsp => {
				dispatch({type:"REPOS_LOADED", hello: 1, repos: rsp.players})
			});
			},
			error => dispatch(apologize('The Sandwich Shop', forPerson, error))
		);
	};
}

store.dispatch(
	loadServerData()
);
