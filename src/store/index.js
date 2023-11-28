import { configureStore } from "@reduxjs/toolkit";

import collectionsSlice from "./collections-slice";
import favSlice from "./fav-slice";
import uiSlice from "./ui-slice";

/**
 * Loads state from local storage
 * @returns {Object} stored state data
 */

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    return undefined;
  }
}

/**
 * Saves state from local storage
 */

export function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {}
}

/**
 * Initializing Redux Store with state preloaded from local storage
 */

const store = configureStore({
  reducer: {
    fav: favSlice.reducer,
    collections: collectionsSlice.reducer,
    ui: uiSlice.reducer,
  },
  preloadedState: loadFromLocalStorage(),
});

export default store;
