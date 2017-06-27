
const initState = { content: 'Tibi funky index page data from THE STORE' };

export default function appState(state = initState, action) {

  switch (action.type) {
	case 'HEADER:STANDUP':
	    return Object.assign({}, state, {
	      content: state.content.toUpperCase()
	    });
	break;

	default:
	    return state
  }
}
