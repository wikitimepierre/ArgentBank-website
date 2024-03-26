import { configureStore } from '@reduxjs/toolkit';
import counter from './features/debugCounter/debugCounterSlice';
import debugCheckbox from './features/debugCheckbox/debugCheckboxSlice';
import userInfo from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counter,
    debugCheckbox: debugCheckbox,
    userInfo: userInfo,
  },
});
