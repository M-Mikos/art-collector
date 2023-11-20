import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useLoadMoreSearchResults from "../../hooks/useLoadMoreSearchResults";
import ArtworkThumbnail from "./ArtworkThumbnail";
import LoadingIndicator from "../UI/LoadingIndicator";

import classes from "./Index.module.css";

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
    if (
      props.infiniteScroll &&
      isBottomHit &&
      props.hasMultiplePages &&
      nextPageNumber &&
      !loading
    ) {
      loadItems(nextPageNumber);
    }
  }, [
    isBottomHit,
    props.infiniteScroll,
    props.hasMultiplePages,
    nextPageNumber,
    loading,
    loadItems,
  ]);

  const renderArtworkList = () => (
    <ul className={classes["items-grid"]}>
      {items.map((artwork) => (
        <li key={artwork.id} className={classes.item}>
          <ArtworkThumbnail data={artwork} />
        </li>
      ))}
    </ul>
  );

  const renderNoResultsMessage = () => (
    <p className={classes.message}>No more results.</p>
  );

  return (
    <>
      {renderArtworkList()}
      {loading && <LoadingIndicator />}
      {!props.hasMultiplePages && !props.message && renderNoResultsMessage()}
      {!nextPageNumber && !props.message && renderNoResultsMessage()}
      {props.message && <p className={classes.message}>{props.message}</p>}
    </>
  );
}

export default ArtworkList;
