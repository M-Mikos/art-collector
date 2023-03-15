import { useState } from "react";
import { API_URL, THUMBNAIL_PROPS } from "../../config";
import fetchData from "../helpers/fetchData";

function useLoadMore(prevItems, path, page) {
  const [items, setItems] = useState(prevItems);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadItems = async () => {
    const list = await fetchData(`${API_URL}?page=2`);
    const nextPage = list.pagination.next_url;
    console.log(list, nextPage);
    const idList = list.data.map((item) => item.id).join(",");
    const responseItems = await fetch(
      `${API_URL}?ids=${idList}&fields=${THUMBNAIL_PROPS}`
    );
    const itemsList = await responseItems.json();
    setItems((prevItems) => [...prevItems, ...itemsList.data]);
  };

  return [items, loadItems];
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       setLoading(true);
  //       const responseList = await fetch(`${API_URL}${path}`);
  //       const list = await responseList.json();

  //       const IDList = list.data.map((item) => item.id).join(",");

  //       const responseItems = await fetch(
  //         `${API_URL}?ids=${IDList}&fields=${ARTWORK_PROPS}`
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

export default useLoadMore;
