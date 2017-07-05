import store from '../redux-main';

export default function loadServerData() {
	return function (dispatch) {
		return fetch('http://equal-koala.glitch.me/game/8').then(
			response => {
				response.json().then( rsp => {
					dispatch({type:"REPOS_LOADED", repos: rsp.players})
				});
			},
			error => dispatch({type:"ERROR", message:"Request failed"})
		);
	};
}

export function startFetch() {
	store.dispatch(
		loadServerData()
	);
}
