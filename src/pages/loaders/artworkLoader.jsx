import artworksAPI from "../../../axiosSetup";
import { ARTWORK_PROPS } from "../../../config";

async function artworkLoader({ params }) {
  try {
    const response = await artworksAPI.get(
      `${params.artworkId}?fields=${ARTWORK_PROPS}`
    );

    return response.data;
  } catch (error) {
    return { message: error.message };
  }
}

export default artworkLoader;
