import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/debugCounter/debugCounterSlice';
import debugCheckboxReducer from './features/debugCheckbox/debugCheckboxSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  debugCheckbox: debugCheckboxReducer,
  // mettre tous les reducers ici
});

export default rootReducer;

//function combineReducers combines multiple slice reducers into one root reducer.
//slice reducers are defined by the key in the object passed to combineReducers