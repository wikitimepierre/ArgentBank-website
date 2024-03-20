import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { menuSlice } from "../features/menu/menuSlice";

let state = {
  owner: {},
  list: [
  ]
};

export const store = configureStore(
  {
    preloadedState: state,
    reducer: combineReducers({
      menu: menuSlice.reducer,
    }),
  }
)
