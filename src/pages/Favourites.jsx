import { useLoaderData } from "react-router-dom";
import getArtworksById from "../helpers/getArtworksById";
import ArtworkList from "../components/ArtworkList";

import store from "../store";

function Favourites() {
  const data = useLoaderData();
  const items = data.items;
  const message = data.message;
  return (
    <>
      <ArtworkList items={items} message={message} infiniteScroll={false} />
    </>
  );
}

export default Favourites;

export async function loader() {
  try {
    const list = store.getState().fav.artworks;

    if (list.length === 0) {
      throw new Error("No favourite artworks.");
    }

    return getArtworksById(list);
  } catch (error) {
    return { items: [], message: error.message };
  }
}