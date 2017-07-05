import store from '../redux-main';

function loadServerData() {
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

export function displayDialog(id) {
	return function () {
		store.dispatch({ type: 'DIALOG_SHOWN', id: id })
	}
} 

export function startFetch() {
	store.dispatch(
		loadServerData()
	);
}