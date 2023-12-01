import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import debounce from "../../helpers/debounce";
import useLoadMoreSearchResults from "../../hooks/useLoadMoreSearchResults";
import ArtworkThumbnail from "./ArtworkThumbnail";
import LoadingIndicator from "../UI/LoadingIndicator";
import {
  INFINITE_SCROLL_DEBOUNCE_TIME,
  NO_MORE_RESULTS_MESSAGE,
} from "../../../config";
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
  const { infiniteScroll, hasMultiplePages, message } = props;
  const [searchParams] = useSearchParams();
  const onBottom = useSelector((state) => state.ui.onBottom);
  const [items, loadItems, nextPageNumber, loading, errorMessage] =
    useLoadMoreSearchResults(props.items, searchParams);

  // Infinite scrool
  useEffect(() => {
    if (
      onBottom &&
      infiniteScroll &&
      hasMultiplePages &&
      nextPageNumber &&
      !loading
    ) {
      debounce(loadItems(nextPageNumber), INFINITE_SCROLL_DEBOUNCE_TIME);
    }
  }, [onBottom]);

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
      {(!hasMultiplePages || !nextPageNumber) &&
        !message &&
        renderMessage(NO_MORE_RESULTS_MESSAGE)}
      {message && renderMessage(message)}
      {errorMessage && renderMessage(errorMessage)}
    </>
  );
}

export default ArtworkList;
