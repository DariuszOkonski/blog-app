import { combineReducers, createStore } from 'redux';
import { initialState } from './initialState';
import postReducer from './postsRedux';
import categoriesReducer from './categoriesRedux';

const subreducers = {
  posts: postReducer,
  categories: categoriesReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
