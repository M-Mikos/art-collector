import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import getArtworksById from "../helpers/getArtworksById";
import Collection from "../components/Collection/Index";

import store from "../store";

function CollectionDetails() {
  const { collectionId } = useParams();
  const collection = useSelector((state) =>
    state.collections.collections.find(
      (collection) => collection.id === collectionId
    )
  );
  const data = useLoaderData();
  return (
    <>
      <Collection data={data} collection={collection} />
    </>
  );
}

export default CollectionDetails;

export async function loader({ params }) {
  try {
    const list = store
      .getState()
      .collections.collections.find(
        (collection) => collection.id === params.collectionId
      ).artworks;

    if (list.length === 0) {
      throw new Error("Collection is empty.");
    }

    return getArtworksById(list);
  } catch (error) {
    return { items: [], message: error.message };
  }
}
