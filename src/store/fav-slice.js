import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favs",
  initialState: { artworks: [191, 90910, 36115] },
  reducers: {
    repalceFav(state, action) {
      state.artworks = action.payload.artworks;
    },
    addArtworkToFav(state, action) {
      const newArtwork = action.payload;
      state.artworks.push({
        id: newArtwork.id,
      });
    },
    removeArtworkFromFav(state, action) {
      const id = action.payload;
      state.artworks = state.artworks.filter((artworks) => artworks.id !== id);
    },
  },
});

export const favActions = favSlice.actions;
export default favSlice;
