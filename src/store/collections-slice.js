import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    collections: [
      {
        id: "c1",
        title: "Collection 1",
        description: "Lorem ipsum dolor sit amet",
        artworks: [143121, 100089],
      },
      {
        id: "c2",
        title: "Collection 2",
        description: "Lorem ipsum dolor sit amet",
        artworks: [220690],
      },
      {
        id: "c3",
        title: "Collection 3",
        description: "Lorem ipsum dolor sit amet",
        artworks: [21394, 15468, 3922, 4341, 70982],
      },
    ],
  },
  reducers: {
    repalce(state, action) {},
    create(state, action) {},
    edit(state, action) {},
    remove(state, action) {
      const collectionId = action.payload;
      state.collections = state.collections.filter(
        (collection) => collection.id !== collectionId
      );
    },
    toggleArtwork(state, action) {
      const { collectionId, artworkId } = action.payload;
      const collection = state.collections.find(
        (collection) => collection.id === collectionId
      );
      collection.artworks.includes(artworkId)
        ? (collection.artworks = collection.artworks.filter(
            (id) => id !== artworkId
          ))
        : collection.artworks.push(artworkId);
    },
  },
});

export const collectionsActions = collectionsSlice.actions;
export default collectionsSlice;
