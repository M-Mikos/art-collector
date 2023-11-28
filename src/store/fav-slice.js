import { createSlice } from "@reduxjs/toolkit";

/**
 * React Redux store slice for initializing and storing favourites state and defining its methods (reducers).
 */

const favSlice = createSlice({
  name: "favs",
  initialState: { artworks: [191, 90910, 36115] },
  reducers: {
    repalce(state, action) {
      state.artworks = action.payload.artworks;
    },
    toggle(state, action) {
      const artworkId = action.payload;

      state.artworks.includes(artworkId)
        ? (state.artworks = state.artworks.filter((id) => id !== artworkId))
        : state.artworks.push(artworkId);
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice;
