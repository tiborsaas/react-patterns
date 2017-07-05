import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import header from './header/store';
import index from './index/store';
import dialog from './dialog/store';

let mainReducer = combineReducers({
  header,
  index,
  dialog
});

export default createStore(mainReducer, applyMiddleware(thunk));
