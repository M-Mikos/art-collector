import { API_URL, THUMBNAIL_PROPS } from "../../config";
import fetchData from "./fetchData";

export default async function getArtworksById(idArr) {
  try {
    const idStr = idArr.join(",");
    const items = await fetchData(
      `${API_URL}?ids=${idStr}&fields=${THUMBNAIL_PROPS}`
    );

    return { items: items.data, message: "" };
  } catch (error) {
    throw error;
  }
}
