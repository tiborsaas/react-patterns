
const initState = { 
	content: 'Tibi funky index page data from THE STORE', 
	repos: [] 
};

export default function appState(state = initState, action) {

	switch (action.type) {
		case 'HEADER:STANDUP':
				return Object.assign({}, state, {
					content: state.content.toUpperCase(),
					repos: state.repos.map( m => {
						m.username = m.username.toUpperCase()
						return m;
					})
				});
		break;

		case 'REPOS_LOADED': 
			return Object.assign({}, state, {
					repos: action.repos
				});
		break;

		default:
			return state
	}
}
