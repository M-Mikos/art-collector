import { API_URL, THUMBNAIL_PROPS } from "../../config";
import fetchData from "./fetchData";

export default async function getArtworksById(idArr) {
  try {
    const idStr = idArr.join(",");
    const items = await fetchData(
      `${API_URL}?ids=${idStr}&fields=${THUMBNAIL_PROPS}`
    );

    //Fixing unordered API response (for correct thumbnais in collection list )
    const sortedItems = idArr.map((id) => {
      return items.data.filter((item) => item.id === id)[0];
    });

    return { items: sortedItems, message: "" };
  } catch (error) {
    throw error;
  }
}
