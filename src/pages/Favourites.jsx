import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";

import TitleBanner from "../components/UI/TitleBanner";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import loadFavouriteArtworks from "../helpers/loadFavouriteArtworks";

function Favourites() {
  const data = useLoaderData();
  const [items, setItems] = useState(data.items);
  const [message, setMessage] = useState(data.message);

  const favs = useSelector((state) => state.fav.artworks);

  // Updating favourities list on toggle fav
  useEffect(() => {
    const newItems = items.filter((item) => favs.includes(item.id));
    setItems(newItems);
    newItems.length === 0 && setMessage("No favourite artworks.");
  }, [favs]);

  return (
    <>
      <TitleBanner
        title="Favourites"
        subtitle={`Number of artworks: ${favs.length}`}
      />
      <ArtworkList items={items} message={message} infiniteScroll={false} />
    </>
  );
}

export default Favourites;

export async function loader() {
  try {
    const items = await loadFavouriteArtworks();
    return items;
  } catch (error) {
    return { items: [], message: error.message };
  }
}
