import ArtworkThumbnail from "./ArtworkThumbnail";
import { API_URL, THUMBNAIL_PROPS } from "../../../config";

import classes from "./Index.module.css";
import { Link } from "react-router-dom";
import store from "../../store";

function ArtworkList(props) {
  console.log("artowrk list props:", props);
  return (
    <>
      <ul className={classes["items-grid"]}>
        {props.data.items.data.map((artwork) => (
          <li key={artwork.id} className={classes.item}>
            <Link to={`/${artwork.id}`} state={location.pathname}>
              <ArtworkThumbnail data={artwork} />
            </Link>
          </li>
        ))}
      </ul>
      <p>{props.data.message}</p>
    </>
  );
}

export default ArtworkList;

export async function loader({ request, params }) {
  let idList = "";
  const url = new URL(request.url);

  if (url.pathname === "/search") {
    const path = url.pathname + url.search;
    const responseList = await fetch(`${API_URL}${path}`);

    if (!responseList.ok) {
      return { items: { data: [] }, message: "Couldn't fetch data" };
    }

    const list = await responseList.json();
    if (list.length === 0) {
      return { items: [], message: "No results" };
    }
    idList = list.data.map((item) => item.id).join(",");
  }

  if (url.pathname === "/my-account") {
    const list = store.getState().fav.artworks;
    idList = list.join(",");
  }

  if (url.pathname === `/my-account/collections/${params.collectionId}`) {
    const list = store
      .getState()
      .collections.collections.find(
        (collection) => collection.id === params.collectionId
      ).artworks;

    if (list.length === 0) {
      return { items: { data: [] }, message: "Empty list" };
    }

    idList = list.join(",");
  }

  const responseItems = await fetch(
    `${API_URL}?ids=${idList}&fields=${THUMBNAIL_PROPS}`
  );

  if (!responseItems.ok) {
    return { items: { data: [] }, message: "Couldn't fetch data" };
  }
  const items = await responseItems.json();

  return { items, message: "" };
}
