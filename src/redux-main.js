import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import header from './header/store';
import index from './index/store';

let mainReducer = combineReducers({
  header,
  index,
});

export default createStore(mainReducer, applyMiddleware(thunk));
