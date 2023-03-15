import { API_URL, THUMBNAIL_PROPS } from "../../config";
import fetchData from "./fetchData";

export default async function getArtworksById(idArr) {
  try {
    console.log(idArr);
    const idStr = idArr.join(",");
    console.log(idStr);
    const items = await fetchData(
      `${API_URL}?ids=${idStr}&fields=${THUMBNAIL_PROPS}`
    );

    return { items: items.data, message: "" };
  } catch (error) {
    throw error;
  }
}
