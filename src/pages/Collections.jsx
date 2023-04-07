import { useLoaderData } from "react-router-dom";
import CollectionsList from "../components/CollectionsList/Index.jsx";
import store from "../store";
import getArtworksById from "../helpers/getArtworksById.js";
import TitleBanner from "../components/UI/TitleBanner.jsx";

function Collections() {
  const thumbnails = useLoaderData();

  return (
    <>
      <TitleBanner
        title="Collections"
        subtitle={
          thumbnails.length === 1
            ? `You have 1 collection.`
            : `You have ${thumbnails.length} collections.`
        }
      />
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

    const thumbnailsObjs = await getArtworksById(thumbnailsIdList);

    const thumbnailsSrc = thumbnailsObjs.items.map((obj) => {
      return obj["image_id"];
    });
    return thumbnailsSrc;
  } catch (error) {
    return [];
  }
}
