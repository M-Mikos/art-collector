import { useEffect, useState } from "react";
import { API_URL, THUMBNAIL_PROPS } from "../../config";
import fetchData from "../helpers/fetchData";

function useLoadMoreSearchResults(prevItems, searchParams) {
  const [items, setItems] = useState(prevItems);
  const [nextPageNumber, setNextPageNumber] = useState(2);

  useEffect(() => {
    setItems(prevItems);
  }, [prevItems]);

  // console.log("hook artwork gotten list", prevItems);
  // console.log("hook artwork list", items);

  const loadItems = async (pageNumber) => {
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
    console.log(pageNumber, totalPages, pageNumber !== totalPages);
    pageNumber !== totalPages
      ? setNextPageNumber((pageNumber) => pageNumber + 1)
      : setNextPageNumber(null);
  };

  return [items, loadItems, nextPageNumber];
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       setLoading(true);
  //       const responseList = await fetch(${API_URL}${path});
  //       const list = await responseList.json();

  //       const IDList = list.data.map((item) => item.id).join(",");

  //       const responseItems = await fetch(
  //         ${API_URL}?ids=${IDList}&fields=${ARTWORK_PROPS}
  //       );
  //       const items = await responseItems.json();
  //       setData(items);
  //     } catch {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   });
  // }, [path]);
  // return { data, error, loading };
}

export default useLoadMoreSearchResults;
