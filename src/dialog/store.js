
const initState = { 
	displayWithId: '' 
};

export default function reducer(state = initState, action) {

	switch (action.type) {
		case 'DIALOG_SHOWN':
			return Object.assign({}, state, {
				displayWithId: action.id,
			});
		break;

		default:
			return state
	}
}
