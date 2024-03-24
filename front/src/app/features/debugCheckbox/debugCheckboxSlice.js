import { createSlice } from '@reduxjs/toolkit';

export const debugCheckboxSlice = createSlice({
  name: "debugCheckbox",
  initialState: { value: false },
  reducers: {
    switchDebugValue(state) { state.value = !state.value; }
  },
});


export const { switchDebugValue } = debugCheckboxSlice.actions;
export default debugCheckboxSlice.reducer;
