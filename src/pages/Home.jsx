import { useLoaderData } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";
import TitleBanner from "../components/UI/TitleBanner";
import { WELCOME_BANNER_CONTENT, WELCOME_BANNER_TITLE } from "../../config";

/**
 * Page component for displaying Home page.
 * Gets artwork data from React Router Loader.
 *
 * @returns React fragment with TitleBanner and ArtworkList React components
 */

function Home() {
  const { items, message, hasMultiplePages } = useLoaderData();

  return (
    <>
      <TitleBanner
        title={WELCOME_BANNER_TITLE}
        subtitle={WELCOME_BANNER_CONTENT}
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
