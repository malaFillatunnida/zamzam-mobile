import { createStore, applyMiddleware, combineReducers } from 'redux';
import jamaahReducer from './reducers/jamaahReducer.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  jamaah: jamaahReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
