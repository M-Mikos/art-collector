import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";
import TitleBanner from "../components/UI/TitleBanner";

/**
 * Page component for displaying Home page.
 * Gets artwork data from React Router Loader.
 * 
 * @returns React fragment with TitleBanner and ArtworkList React components
 */

function Home() {
  console.log(`Rendering Home Page`);
  const { items, message, hasMultiplePages } = useLoaderData();

  return (
    <>
      <TitleBanner
        title={<span>Welcome, Art&nbsp;Collector</span>}
        subtitle={
          "Create your own art collections, choose your favorite works. Explore the extraordinary fine art resources gathered by The Art Institute of Chicago."
        }
      />
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
