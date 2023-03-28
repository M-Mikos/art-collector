import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import detectHittingBottom from "../../helpers/detectHittingBottom";
import useLoadMoreSearchResults from "../../hooks/useLoadMoreSearchResults";
import ArtworkThumbnail from "./ArtworkThumbnail";

import classes from "./Index.module.css";

function ArtworkList(props) {
  const [searchParams] = useSearchParams();
  const [items, loadItems, nextPageNumber] = useLoadMoreSearchResults(
    props.items,
    searchParams
  );

  // Infinite scrool

  const onScroll = () => {
    if (detectHittingBottom()) {
      loadItems(nextPageNumber);
      window.removeEventListener("scroll", onScroll);
    }
  };

  useEffect(() => {
    props.infiniteScroll &&
      false &&
      window.addEventListener("scroll", onScroll);
  }, [items]);

  return (
    <>
      <ul className={classes["items-grid"]}>
        {items.map((artwork) => (
          <li key={artwork.id} className={classes.item}>
            <ArtworkThumbnail data={artwork} />
          </li>
        ))}
      </ul>
      {!props.hasMultiplePages && !props.message && <p>No more results.</p>}
      {props.message && <p>{props.message}</p>}
    </>
  );
}

export default ArtworkList;
