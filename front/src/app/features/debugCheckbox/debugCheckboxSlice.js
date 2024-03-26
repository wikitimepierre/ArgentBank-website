import { createSlice } from '@reduxjs/toolkit';

export const debugCheckboxSlice = createSlice({
  name: "debugCheckbox",
  initialState: { value: false },
  reducers: {
    switchDebugValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchDebugValue } = debugCheckboxSlice.actions;
export default debugCheckboxSlice.reducer;
