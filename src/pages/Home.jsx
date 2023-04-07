import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";
import TitleBanner from "../components/UI/TitleBanner";

function Home() {
  const data = useLoaderData();
  const items = data.items;
  const message = data.message;
  const hasMultiplePages = data.hasMultiplePages;
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
