import { Link } from "react-router-dom";
import useLoadMore from "../../hooks/useLoadMore";
import ArtworkThumbnail from "./ArtworkThumbnail";

import classes from "./Index.module.css";

function ArtworkList(props) {
  const [items, loadItems] = useLoadMore(props.items);

  const loadHandler = () => {
    loadItems();
  };

  console.log("inside artwork", items);
  return (
    <>
      <ul className={classes["items-grid"]}>
        {items.map((artwork) => (
          <li key={artwork.id} className={classes.item}>
            <Link to={`/${artwork.id}`} state={location.pathname}>
              <ArtworkThumbnail data={artwork} />
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={loadHandler}>Load more</button>
      {props.message && <p>{props.message}</p>}
    </>
  );
}

export default ArtworkList;
