import { useEffect, useState } from "react";
import artworksAPI from "../../axiosSetup";
import getArtworksById from "../helpers/getArtworksById";

/**
 *
 * @param {*} prevItems
 * @param {*} searchParams
 * @returns
 */

function useLoadMoreSearchResults(prevItems, searchParams) {
  const [items, setItems] = useState(prevItems);
  const [nextPageNumber, setNextPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setItems(prevItems);
  }, [prevItems]);

  const loadItems = async (pageNumber) => {
    setLoading(true);

    // Get items list
    const list = await artworksAPI.get(
      `/search?${searchParams}&page=${pageNumber}`
    );
    // Get items details
    const itemsList = await getArtworksById(
      list.data.data.map((item) => item.id)
    );

    // Update items state
    setItems((prevItems) => [...prevItems, ...itemsList]);

    // Check for last page
    const totalPages = list.data.pagination["total_pages"];

    pageNumber !== totalPages
      ? setNextPageNumber((pageNumber) => pageNumber + 1)
      : setNextPageNumber(null);

    setLoading(false);
  };

  return [items, loadItems, nextPageNumber, loading];
}

export default useLoadMoreSearchResults;
