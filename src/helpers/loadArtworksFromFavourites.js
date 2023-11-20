import store from "../store";
import getArtworksById from "./getArtworksById";

/**
 * Function gets favourites artworks IDs from store, checks if favourites array is not empty and returns detailed items array.
 *
 * @returns {Object[]} Array of detailed artwork item objects.
 */

async function loadArtworksFromFavourites() {
  const list = store.getState().fav.artworks;

  if (list.length === 0) {
    throw new Error("No favourite artworks.");
  }

  const items = await getArtworksById(list);
  return items;
}

export default loadArtworksFromFavourites;
