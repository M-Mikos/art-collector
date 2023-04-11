import { useLoaderData, useSearchParams } from "react-router-dom";
import getSearchPath from "../helpers/getSearchPath";
import getArtworksById from "../helpers/getArtworksById";
import ArtworkList from "../components/ArtworkList/Index";
import { API_URL } from "../../config";
import fetchData from "../helpers/fetchData";
import TitleBanner from "../components/UI/TitleBanner";

function SearchResults() {
  const { items, message, hasMultiplePages, itemsQuantity } = useLoaderData();
  const [searchParams] = useSearchParams();

  return (
    <>
      <TitleBanner
        title={`Search results for: ${searchParams.get("q")}`}
        subtitle={`Number of artworks: ${itemsQuantity}`}
      />
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
    const itemsQuantity = data.pagination.total;

    if (data.data.length === 0) {
      throw new Error("No results.");
    }

    const items = await getArtworksById(data.data.map((item) => item.id));

    return { items: items.items, hasMultiplePages, itemsQuantity };
  } catch (error) {
    return {
      items: [],
      message: error.message,
      hasMultiplePages: false,
      itemsQuantity: 0,
    };
  }
}
