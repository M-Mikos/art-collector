import store from "../store";
import getArtworksById from "./getArtworksById";

export default async function loadCollectionArtworks(params) {
  const list = store
    .getState()
    .collections.collections.find(
      (collection) => collection.id === params.collectionId
    ).artworks;

  if (list.length === 0) {
    throw new Error("Collection is empty.");
  }

  return getArtworksById(list);
}
