import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import ArtworkList from "../components/ArtworkList/Index";
import TitleBanner from "../components/UI/TitleBanner";

/**
 * Page component for displaying Favourites page.
 * Gets artwork data from React Router Loader.
 * UseEffect manages UI state on store change (demoving favourites).
 *
 * @returns React fragment with TitleBanner and ArtworkList React components
 */

function Favourites() {
  console.log("rendering Favourites Page");
  const { items: initialItems, message: initialMessage } = useLoaderData();
  const [items, setItems] = useState(initialItems);
  const [message, setMessage] = useState(initialMessage);

  const favourites = useSelector((state) => state.fav.artworks);

  useEffect(() => {
    const newItems = items.filter((item) => favourites.includes(item.id));
    setItems(newItems);
    newItems.length === 0 && setMessage("No favourite artworks.");
  }, [favourites, initialItems]);

  return (
    <>
      <TitleBanner
        title="Favourites"
        subtitle={`Number of artworks: ${favourites.length}`}
      />
      <ArtworkList items={items} message={message} infiniteScroll={false} />
    </>
  );
}

export default Favourites;
