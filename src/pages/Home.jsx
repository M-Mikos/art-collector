import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";

function Home() {
  const data = useLoaderData();
  return (
    <>
      <ArtworkList data={data} />
    </>
  );
}

export default Home;
