import { useLoaderData } from "react-router-dom";
import CollectionsList from "../components/CollectionsList/Index.jsx";
import store from "../store";
import getArtworksById from "../helpers/getArtworksById.js";
import TitleBanner from "../components/UI/TitleBanner.jsx";
import { useSelector } from "react-redux";

function Collections() {
  const thumbnails = useLoaderData();
  const collectionsQuantity = useSelector(
    (state) => state.collections.collections.length
  );

  return (
    <>
      <TitleBanner
        title="Collections"
        subtitle={
          collectionsQuantity === 1
            ? `You have 1 collection.`
            : `You have ${collectionsQuantity} collections.`
        }
      />
      <CollectionsList thumbnails={thumbnails} />
    </>
  );
}

export default Collections;

export async function loader() {
  try {
    const collections = store.getState().collections.collections;
    const artworksIdList = collections.map((collection) => {
      return collection.artworks[0] ? collection.artworks[0] : null;
    });

    const artworks = await getArtworksById(artworksIdList);
    const thumbnailsSources = artworks.map((obj, i) => {
      if (!obj) {
        return { id: collections[i].id, src: null };
      } else {
        return { id: collections[i].id, src: obj["image_id"] };
      }
    });

    return thumbnailsSources;
  } catch (error) {
    return [error.message];
  }
}
