import { EMPTY_COLLECTIONS_LIST_MESSAGE } from "../../config";
import store from "../store";
import getArtworksById from "./getArtworksById";

/**
 * Function accepts collection ID, gets requested collection artworks IDs from store, checks if collection is not empty and returns detailed items array.
 *
 * @param {number} requestedCollectionID ID of collection with artworks to request.
 * @returns {Object[]} Array of detailed artwork item objects.
 */

async function loadArtworksFromCollection(requestedCollectionID) {
  const list = store
    .getState()
    .collections.collections.find(
      (collection) => collection.id === requestedCollectionID
    ).artworks;

  if (list.length === 0) {
    throw new Error(EMPTY_COLLECTIONS_LIST_MESSAGE);
  }

  const items = getArtworksById(list);
  return items;
}

export default loadArtworksFromCollection;
