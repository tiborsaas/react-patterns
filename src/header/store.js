
const initState = { name:'The header' };

export default function reducer(state = initState, action) {

  switch (action.type) {
	case 'HEADER:STANDUP':
	    return Object.assign({}, state, {
	      name: state.name.toUpperCase()
	    });
	break;

	default:
	    return state
  }
}
