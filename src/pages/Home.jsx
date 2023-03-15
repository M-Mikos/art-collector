import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";

function Home() {
  const data = useLoaderData();
  const items = data.items;
  const message = data.message;
  return (
    <>
      <ArtworkList items={items} message={message} />
    </>
  );
}

export default Home;
