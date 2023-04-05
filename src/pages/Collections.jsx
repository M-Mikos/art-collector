import { useLoaderData } from "react-router-dom";
import CollectionsList from "../components/CollectionsList/Index.jsx";
import store from "../store";
import getArtworksById from "../helpers/getArtworksById.js";

function Collections() {
  const thumbnails = useLoaderData();

  console.log(thumbnails);

  return (
    <>
      <CollectionsList thumbnails={thumbnails} />
    </>
  );
}

export default Collections;

export async function loader({}) {
  try {
    const thumbnailsIdList = store
      .getState()
      .collections.collections.map((collection) => {
        return collection.artworks[0] ? collection.artworks[0] : null;
      });

    console.log("loader", thumbnailsIdList);

    const thumbnailsObjs = await getArtworksById(thumbnailsIdList);

    const thumbnailsSrc = thumbnailsObjs.items.map((obj) => {
      return obj["image_id"];
    });
    return thumbnailsSrc;
  } catch (error) {
    return [];
  }
}
