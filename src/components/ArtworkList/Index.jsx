import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useLoadMoreSearchResults from "../../hooks/useLoadMoreSearchResults";
import ArtworkThumbnail from "./ArtworkThumbnail";
import LoadingIndicator from "../UI/LoadingIndicator";
import classes from "./Index.module.css";

/**
 * Component for displaying artwork list.
 * Gets bottom hit data from the React Redux store, for calling infinite scroll.
 * Utilizes custom useLoadMoreSearchResults hook for managing infinite scroll.
 * @param {Object} props
 * @param {boolean} props.infiniteScroll infinie scroll contidion.
 * @param {boolean} props.hasMultiplePages infinie scroll contidion.
 * @param {string} props.message data loading error/info message.
 * @param {Object[]} props.items artwork items.
 * @returns JSX code with ArtworkList component.
 */

function ArtworkList(props) {
  console.log("Rendering List");
  const { infiniteScroll, hasMultiplePages, message } = props;
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
      infiniteScroll &&
      isBottomHit &&
      hasMultiplePages &&
      nextPageNumber &&
      !loading
    ) {
      loadItems(nextPageNumber);
    }
  }, [
    isBottomHit,
    infiniteScroll,
    hasMultiplePages,
    nextPageNumber,
    loading,
    loadItems,
  ]);

  const renderArtworkList = () => (
    <ul className={classes["items-grid"]}>
      {items.map((artwork) => (
        <li key={artwork.id} className={classes.item}>
          <ArtworkThumbnail
            id={artwork.id}
            imageId={artwork.image_id}
            title={artwork.title}
            artistTitle={artwork.artist_title}
            dateDisplay={artwork.date_display}
          />
        </li>
      ))}
    </ul>
  );

  const renderMessage = (message) => (
    <p className={classes.message}>{message}</p>
  );

  return (
    <>
      {renderArtworkList()}
      {loading && <LoadingIndicator />}
      {(props.hasMultiplePages || nextPageNumber) &&
        !props.message &&
        renderMessage("No more results.")}
      {props.message && renderMessage(message)}
    </>
  );
}

export default ArtworkList;
