import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
  name: "collections",
  initialState: { collections: [] },
  reducers: {
    repalceCollections(state, action) {},
    createCollection(state, action) {},
    editCollection(state, action) {},
    removeCollection(state, action) {},
    addArtworkToCollection(state, action) {},
    removeArtworkFromCollection(state, action) {},
  },
});

export const collectionsActions = collectionsSlice.actions;
export default collectionsSlice;
