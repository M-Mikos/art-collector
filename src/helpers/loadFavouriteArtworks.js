import store from "../store";
import getArtworksById from "./getArtworksById";

export default async function loadFavouriteArtworks() {
  const list = store.getState().fav.artworks;

  if (list.length === 0) {
    throw new Error("No favourite artworks.");
  }

  return await getArtworksById(list);
}
