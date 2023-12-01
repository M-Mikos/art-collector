import { useEffect, useState } from "react";
import artworksAPI from "../../axiosSetup";
import getArtworksById from "../helpers/getArtworksById";

/**
 * Custom hook for attaching more artwork items to items list.
 * This hook is used to power artwork list infinite scroll.
 * @param {Object[]} prevItems collection of currently loaded items.
 * @param {string} searchParams search params path for fetching more items
 * @returns Array with "item" array with updated items list, "loadItems" function concatenating new items based on next page number, "nextPageNumber" for fetching proper items (in combination witch "loadItems" function) , and "loading" boolean value for managing loading indicator state.
 */

function useLoadMoreSearchResults(prevItems, searchParams) {
  const [items, setItems] = useState(prevItems);
  const [nextPageNumber, setNextPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setItems(prevItems);
  }, [prevItems]);

  const loadItems = async (pageNumber) => {
    try {
      setLoading(true);

      // Get items list
      const list = await artworksAPI.get(
        `/search?${searchParams}&page=${pageNumber}`
      );

      const prevItemsIDs = prevItems.map((item) => item.id);
      const newItemsIDs = list.data.data.map((item) => item.id);

      // Remove duplicated items
      const uniqueNewItemsIDs = newItemsIDs.filter(
        (newItemID) =>
          !prevItemsIDs.find((prevItemID) => prevItemID === newItemID)
      );

      // Get items details
      const newItems = await getArtworksById(uniqueNewItemsIDs);

      // Update items state
      setItems((prevItems) => [...prevItems, ...newItems]);

      // Check for last page
      const totalPages = list.data.pagination.total_pages;

      pageNumber !== totalPages
        ? setNextPageNumber((pageNumber) => pageNumber + 1)
        : setNextPageNumber(null);

      setLoading(false);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return [items, loadItems, nextPageNumber, loading, errorMessage];
}

export default useLoadMoreSearchResults;
