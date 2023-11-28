import loadArtworksfromCollection from "../../helpers/loadArtworksFromCollection";

async function collectionDetailsLoader({ params }) {
  try {
    const items = await loadArtworksfromCollection(params.collectionId);
    return { items, message: "" };
  } catch (error) {
    return { items: [], message: error.message };
  }
}

export default collectionDetailsLoader;
