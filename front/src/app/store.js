import { configureStore } from '@reduxjs/toolkit';
import counter from './features/debugCounter/debugCounterSlice';
import debugCheckbox from './features/debugCheckbox/debugCheckboxSlice';

export const store = configureStore({
  reducer: {
    counter: counter,
    debugCheckbox: debugCheckbox,
  },
});
