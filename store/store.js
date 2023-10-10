import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MitraReducers from './Reducers/MitraReducers';
import PaketReducers from './Reducers/PaketReducers';
import JamaahReducers from './Reducers/JamaahReducers';

const rootReducer = combineReducers({
  jamaah: JamaahReducers,
  paket: PaketReducers,
  mitra: MitraReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
