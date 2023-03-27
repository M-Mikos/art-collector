import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";

function Home() {
  const data = useLoaderData();
  const items = data.items;
  const message = data.message;
  const hasMultiplePages = data.hasMultiplePages;
  return (
    <>
      <ArtworkList
        items={items}
        message={message}
        hasMultiplePages={hasMultiplePages}
        infiniteScroll={true}
      />
    </>
  );
}

export default Home;
