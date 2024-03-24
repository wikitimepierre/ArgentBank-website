import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/debugCounter/debugCounterSlice';
import debugCheckbox from './features/debugCheckbox/debugCheckboxSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    debugCheckbox: debugCheckbox,
  },
});
