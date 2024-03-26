import { configureStore } from '@reduxjs/toolkit';
import counter from './features/debugCounter/debugCounterSlice';
import debugCheckbox from './features/debugCheckbox/debugCheckboxSlice';
import saveUserEmail from './features/user/userSlice';
import saveUserToken from './features/user/userSlice';
// import saveUserEmailToken from './features/user/userSlice';
import saveUserInfo from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counter,
    debugCheckbox: debugCheckbox,
    saveUserEmail: saveUserEmail,
    saveUserToken: saveUserToken,
    // saveUserEmailToken: saveUserEmailToken,
    saveUserInfo: saveUserInfo,
  },
});
