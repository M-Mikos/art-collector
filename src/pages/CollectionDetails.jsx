import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import Collection from "../components/Collection/Index";

import loadCollectionArtworks from "../helpers/loadCollectionArtworks";
import { useEffect, useState } from "react";

function CollectionDetails() {
  const { collectionId } = useParams();
  const collection = useSelector((state) =>
    state.collections.collections.find(
      (collection) => collection.id === collectionId
    )
  );
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);

  const artworks = collection.artworks;

  // Updating collection artworks list on toggle
  useEffect(() => {
    const newItems = data.items.filter((item) => artworks.includes(item.id));
    setData({
      items: newItems,
      message: newItems.length === 0 ? "Empty collection." : "",
    });
  }, [artworks]);

  return (
    <>
      <Collection data={data} collection={collection} />
    </>
  );
}

export default CollectionDetails;

export async function loader({ params }) {
  try {
    const items = await loadCollectionArtworks(params);
    return items;
  } catch (error) {
    return { items: [], message: error.message };
  }
}
