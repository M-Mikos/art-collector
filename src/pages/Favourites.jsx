import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";

import TitleBanner from "../components/UI/TitleBanner";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import loadArtworksFromFavourites from "../helpers/loadArtworksFromFavourites";

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

  console.log("favs", data);

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
    const items = await loadArtworksFromFavourites();
    console.log("fav loader", items);
    return { items, message: "" };
  } catch (error) {
    return { items: [], message: error.message };
  }
}
