import { API_URL, ARTWORK_PROPS } from "../../config";

async function fetchItems(path) {
  try {
    const responseList = await fetch(`${API_URL}${path}`);
    const list = await responseList.json();

    const IDList = list.data.map((item) => item.id).join(",");

    const responseItems = await fetch(
      `${API_URL}?ids=${IDList}&fields=${ARTWORK_PROPS}`
    );
    const items = await responseItems.json();
    return items;
  } catch {
    throw new Error();
  }
}

export default fetchItems;
