import store from "../../store";
import getArtworksById from "../../helpers/getArtworksById.js";

async function collectionListLoader() {
  try {
    const collections = store.getState().collections.collections;
    const artworksIdList = collections.map((collection) => {
      return collection.artworks[0] ? collection.artworks[0] : null;
    });

    const artworks = await getArtworksById(artworksIdList);
    const thumbnailsSources = artworks.map((obj, i) => ({
      id: collections[i].id,
      src: obj ? obj["image_id"] : null,
    }));

    return thumbnailsSources;
  } catch (error) {
    return [error.message];
  }
}

export default collectionListLoader;
