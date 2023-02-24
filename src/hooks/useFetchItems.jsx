import { useEffect, useState } from "react";
import { API_URL, ARTWORK_PROPS } from "../../config";

function useFetchItems(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const responseList = await fetch(`${API_URL}${path}`);
        const list = await responseList.json();

        const IDList = list.data.map((item) => item.id).join(",");

        const responseItems = await fetch(
          `${API_URL}?ids=${IDList}&fields=${ARTWORK_PROPS}`
        );
        const items = await responseItems.json();
        setData(items);
      } catch {
        setError(err);
      } finally {
        setLoading(false);
      }
    });
  }, [path]);
  return { data, error, loading };
}

export default useFetchItems;
