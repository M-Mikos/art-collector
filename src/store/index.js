import { configureStore } from "@reduxjs/toolkit";

import collectionsSlice from "./collections-slice";
import favSlice from "./fav-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    fav: favSlice.reducer,
    collections: collectionsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
