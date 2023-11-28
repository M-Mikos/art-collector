import loadArtworksFromFavourites from "../../helpers/loadArtworksFromFavourites";

async function favouritesLoader() {
  try {
    const items = await loadArtworksFromFavourites();
    return { items, message: "" };
  } catch (error) {
    return { items: [], message: error.message };
  }
}

export default favouritesLoader;
