import { useLoaderData, useLocation } from "react-router-dom";
import Artwork from "../components/Artwork/Index";

function ArtworkPage() {
  const data = useLoaderData();
  const location = useLocation();

  return <Artwork data={data} prevPath={location.state} />;
}

export default ArtworkPage;
