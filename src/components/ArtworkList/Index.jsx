import ArtworkThumbnail from "./ArtworkThumbnail";
import { API_URL, THUMBNAIL_PROPS } from "../../../config";

import classes from "./Index.module.css";
import { json, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ArtworkList(props) {
  // const ids = useSelector((state) => state.favs.artworks);
  // console.log(ids);
  return (
    <ul className={classes["items-grid"]}>
      {props.items.data.map((artwork) => (
        <li key={artwork.id} className={classes.item}>
          <Link to={`/${artwork.id}`} state={location.pathname}>
            <ArtworkThumbnail data={artwork} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArtworkList;

export async function loader({ request }) {
  let idList = "";
  const url = new URL(request.url);

  console.log(url.pathname);

  if (url.pathname === "/search") {
    const path = url.pathname + url.search;
    const responseList = await fetch(`${API_URL}${path}`);

    if (!responseList.ok) {
      return json({ message: "Couldn't fetch data" }, { status: 500 });
    }

    const list = await responseList.json();
    idList = list.data.map((item) => item.id).join(",");
  }

  if (url.pathname === "/my-account") {
    // const count = useSelector((state) => state.favs.artworks);
    // console.log("xd", count);
    // const list = [];
    // idList = list.data.map((item) => item.id).join(",");
  }

  const responseItems = await fetch(
    `${API_URL}?ids=${idList}&fields=${THUMBNAIL_PROPS}`
  );

  if (!responseItems.ok) {
    return json({ message: "Couldn't fetch data" }, { status: 500 });
  }
  const items = await responseItems.json();

  // const responseList = await fetch(`${API_URL}/search?q=picasso&limit=20`);
  // const list = await responseList.json();

  // const IDList = list.data.map((item) => item.id);

  // const responseData = await fetch(
  //   `${API_URL}?ids=${IDList.join(
  //     ","
  //   )}&fields=id,title,image_id,artist_title,date_end`
  // );
  // const data = await responseData.json();

  // const itemsToLoad =
  //   data.total < MAX_ITEMS_NUMBER ? data.total : MAX_ITEMS_NUMBER;

  // const itemsIDs = [];
  // for (let i = 0; i < itemsToLoad; i++) {
  //   itemsIDs.push(data.objectIDs[i]);
  // }

  // const items = await Promise.all(
  //   itemsIDs.map(async (id) => {
  //     const response = await fetch(`${API_URL}objects/${id}`);

  //     const data = await response.json();
  //     return data;
  //   })
  // );

  return items;
}
