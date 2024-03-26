import { createSlice } from '@reduxjs/toolkit';

export const debugCounterSlice = createSlice({
  name: "counter",
  initialState: { value: 5 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  }
});

export const { increment, decrement } = debugCounterSlice.actions;
export default debugCounterSlice.reducer
