import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";

function Home() {
  const items = useLoaderData();
  return (
    <>
      <ArtworkList items={items} />
    </>
  );
}

export default Home;
