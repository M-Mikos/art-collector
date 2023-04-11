import { configureStore } from "@reduxjs/toolkit";

import collectionsSlice from "./collections-slice";
import favSlice from "./fav-slice";
import uiSlice from "./ui-slice";

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    fav: favSlice.reducer,
    collections: collectionsSlice.reducer,
    ui: uiSlice.reducer,
  },
  preloadedState: loadFromLocalStorage(),
});

export default store;
