import { createSlice } from '@reduxjs/toolkit';

export const debugCheckboxSlice = createSlice({
  name: "debugCheckbox",
  initialState: { value: false },
  reducers: {
    //switchDebugValue(state) { state.value = !state.value; }
    switchDebugValue: (state, action) => {
      state.value = action.payload;
      //alert("action.type: " + action.type + "\naction.payload: " + action.payload);
    },
  },
});

export const { switchDebugValue } = debugCheckboxSlice.actions;
export default debugCheckboxSlice.reducer;
