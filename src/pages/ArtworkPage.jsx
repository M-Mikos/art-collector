import { useLoaderData, useLocation } from "react-router-dom";
import Artwork from "../components/Artwork/Index";

/**
 * Page component for displaying Artwork page.
 * Gets artwork data from React Router Loader.
 * Gets location from useLocation hook.
 *
 * @returns Artwork React components
 */

function ArtworkPage() {
  console.log("rendering Artwork Page");
  const data = useLoaderData();
  const location = useLocation();

  return <Artwork data={data.data} prevPath={location.state} />;
}

export default ArtworkPage;
