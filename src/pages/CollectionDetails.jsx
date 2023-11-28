import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import Collection from "../components/Collection/Index";

/**
 * Page component for displaying Favourites page.
 * Gets artwork data from React Router Loader.
 * Gets collections data from React Redux state.
 * UseEffect manages UI state on store change (removing artwork from collection).
 *
 * @returns Collection React components
 */

function CollectionDetails() {
  console.log("rendering Collection Details Page");
  const { collectionId } = useParams();
  const collections = useSelector((state) => state.collections.collections);
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);

  const collection = collections.find(
    (collection) => collection.id === collectionId
  );
  const artworks = collection ? collection.artworks : [];

  useEffect(() => {
    const newItems = data.items.filter((item) => artworks.includes(item.id));
    setData({
      items: newItems,
      message: newItems.length === 0 ? "Empty collection." : "",
    });
  }, [artworks, loaderData.items]);

  return (
    <>
      <Collection
        collection={collection}
        items={data.items}
        message={data.message}
      />
    </>
  );
}

export default CollectionDetails;
