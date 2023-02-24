import { configureStore } from "@reduxjs/toolkit";

import collectionsSlice from "./collections-slice";
import favSlice from "./fav-slice";

const store = configureStore({
  reducer: {
    fav: favSlice.reducer,
    collections: collectionsSlice.reducer,
  },
});

export default store;
