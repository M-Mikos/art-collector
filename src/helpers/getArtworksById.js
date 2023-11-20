import { THUMBNAIL_PROPS } from "../../config";
import artworksAPI from "../../axiosSetup";

/**
 * Function accepts an array of artwork IDs, requests resources from Artic API and returns array of artwork objects.
 *
 * @param {string[]} idArray Array of artwork IDs to request.
 * @return {Object[]} Array of detailed artwork item objects.
 */

async function getArtworksById(idArray) {
  // Convert ID array to string for HTTP request
  const idString = idArray.filter((id) => id !== null).join(",");

  // Get detailed artworks data
  const response = await artworksAPI.get(
    `?ids=${idString}&fields=${THUMBNAIL_PROPS}`
  );

  //Fix unordered API response (for correct thumbnais in collection list )
  const sortedItems = idArray.map((id) => {
    return response.data.data.filter((item) => item.id === id)[0];
  });

  return sortedItems;
}

export default getArtworksById;
