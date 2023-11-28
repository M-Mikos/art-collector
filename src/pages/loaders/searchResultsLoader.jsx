import getSearchPath from "../../helpers/getSearchPath";
import getArtworksById from "../../helpers/getArtworksById";
import artworksAPI from "../../../axiosSetup";

async function searchResultsLoader({ request }) {
  try {
    const response = await artworksAPI.get(getSearchPath(request));

    if (response.data.length === 0) {
      throw new Error("No results.");
    }

    const items = await getArtworksById(
      response.data.data.map((item) => item.id)
    );
    const hasMultiplePages = response.data.pagination["total_pages"] > 1;
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
