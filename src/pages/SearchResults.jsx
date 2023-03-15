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
  return (
    <>
      <ArtworkList items={items} message={message} />
    </>
  );
}

export default SearchResults;

export async function loader({ request }) {
  try {
    const data = await fetchData(`${API_URL}${getSearchPath(request)}`);

    if (data.data.length === 0) {
      throw new Error("No results.");
    }

    return getArtworksById(data.data.map((item) => item.id));
  } catch (error) {
    return { items: [], message: error.message };
  }
}
