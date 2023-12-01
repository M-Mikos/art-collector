import getSearchPath from "../../helpers/getSearchPath";
import getArtworksById from "../../helpers/getArtworksById";
import artworksAPI from "../../../axiosSetup";
import { NO_RESULTS_MESSAGE } from "../../../config";

async function searchResultsLoader({ request }) {
  try {
    const response = await artworksAPI.get(getSearchPath(request));

    if (response.data.data.length === 0) {
      throw new Error(NO_RESULTS_MESSAGE);
    }

    // Remove duplicated IDs
    const uniqueItemsIDs = [
      ...new Set(response.data.data.map((item) => item.id)),
    ];

    const items = await getArtworksById(uniqueItemsIDs);
    const hasMultiplePages = response.data.pagination.total_pages > 1;
    const itemsQuantity = response.data.pagination.total;

    return { items, message: "", hasMultiplePages, itemsQuantity };
  } catch (error) {
    return {
      items: [],
      message: error.message,
      hasMultiplePages: false,
      itemsQuantity: 0,
    };
  }
}

export default searchResultsLoader;
