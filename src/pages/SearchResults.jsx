import { useLoaderData, useSearchParams } from "react-router-dom";
import getSearchPath from "../helpers/getSearchPath";
import getArtworksById from "../helpers/getArtworksById";
import ArtworkList from "../components/ArtworkList/Index";
import TitleBanner from "../components/UI/TitleBanner";
import artworksAPI from "../../axiosSetup";

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
    const response = await artworksAPI.get(getSearchPath(request));

    if (response.data.length === 0) {
      throw new Error("No results.");
    }

    const hasMultiplePages =
      response.data.pagination["total_pages"] > 1 ? true : false;
    const itemsQuantity = response.data.pagination.total;

    const items = await getArtworksById(
      response.data.data.map((item) => item.id)
    );

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
