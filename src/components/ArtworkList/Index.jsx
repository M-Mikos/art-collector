import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useLoadMoreSearchResults from "../../hooks/useLoadMoreSearchResults";
import ArtworkThumbnail from "./ArtworkThumbnail";

import classes from "./Index.module.css";
import { useSelector } from "react-redux";
import LoadingIndicator from "../UI/LoadingIndicator";

function ArtworkList(props) {
  const [searchParams] = useSearchParams();
  const isBottomHit = useSelector(
    (state) => state.ui.contentContainerBottomHit
  );

  const [items, loadItems, nextPageNumber, loading] = useLoadMoreSearchResults(
    props.items,
    searchParams
  );

  // Infinite scrool

  useEffect(() => {
    props.infiniteScroll &&
      isBottomHit &&
      props.hasMultiplePages &&
      nextPageNumber &&
      !loading &&
      loadItems(nextPageNumber);
  }, [isBottomHit]);

  return (
    <>
      <ul className={classes["items-grid"]}>
        {items.map((artwork) => (
          <li key={artwork.id} className={classes.item}>
            <ArtworkThumbnail data={artwork} />
          </li>
        ))}
      </ul>
      {loading && <LoadingIndicator />}
      {!props.hasMultiplePages && !props.message && (
        <p className={classes.message}>No more results.</p>
      )}
      {!nextPageNumber && !props.message && (
        <p className={classes.message}>No more results.</p>
      )}
      {props.message && <p className={classes.message}>{props.message}</p>}
    </>
  );
}

export default ArtworkList;
