import { useEffect, useState } from "react";
import { API_URL, THUMBNAIL_PROPS } from "../../config";
import fetchData from "../helpers/fetchData";

function useLoadMoreSearchResults(prevItems, searchParams) {
  const [items, setItems] = useState(prevItems);
  const [nextPageNumber, setNextPageNumber] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setItems(prevItems);
  }, [prevItems]);

  const loadItems = async (pageNumber) => {
    setLoading(true);
    const url = `${API_URL}/search?${searchParams}&page=${pageNumber}`;

    // Getting items
    const list = await fetchData(url);
    const idList = list.data.map((item) => item.id).join(",");
    const responseItems = await fetch(
      `${API_URL}?ids=${idList}&fields=${THUMBNAIL_PROPS}`
    );
    const itemsList = await responseItems.json();
    setItems((prevItems) => [...prevItems, ...itemsList.data]);

    // Checking for last page
    const totalPages = list.pagination["total_pages"];

    pageNumber !== totalPages
      ? setNextPageNumber((pageNumber) => pageNumber + 1)
      : setNextPageNumber(null);

    setLoading(false);
  };

  return [items, loadItems, nextPageNumber, loading];
}

export default useLoadMoreSearchResults;
