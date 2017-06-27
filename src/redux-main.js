import { createStore, combineReducers } from 'redux';
import header from './header/store';
import index from './index/store';

let mainReducer = combineReducers({
  header,
  index
});

export default createStore(mainReducer);
