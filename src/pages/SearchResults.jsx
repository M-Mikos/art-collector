import { useLoaderData } from "react-router-dom";
import getSearchPath from "../helpers/getSearchPath";
import getArtworksById from "../helpers/getArtworksById";
import ArtworkList from "../components/ArtworkList/Index";
import { API_URL } from "../../config";
import fetchData from "../helpers/fetchData";

function SearchResults() {
  const data = useLoaderData();
  const items = data.items;
  const message = data.message;
  const hasMultiplePages = data.hasMultiplePages;

  return (
    <>
      <ArtworkList
        items={items}
        message={message}
        hasMultiplePages={hasMultiplePages}
        infiniteScroll={true}
      />
    </>
  );
}

export default SearchResults;

export async function loader({ request }) {
  try {
    const data = await fetchData(`${API_URL}${getSearchPath(request)}`);
    const hasMultiplePages = data.pagination["total_pages"] > 1 ? true : false;

    if (data.data.length === 0) {
      throw new Error("No results.");
    }

    const items = await getArtworksById(data.data.map((item) => item.id));
    return { items: items.items, hasMultiplePages };
  } catch (error) {
    return { items: [], message: error.message, hasMultiplePages: false };
  }
}
