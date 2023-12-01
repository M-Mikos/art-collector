import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import ArtworkList from "../components/ArtworkList/Index";
import TitleBanner from "../components/UI/TitleBanner";

/**
 * Page component for displaying Search Results page.
 * Gets artwork data from React Router Loader.
 * Gets params data from useSearchParams to pass down search params.
 *
 * @returns React fragment with TitleBanner and ArtworkList React components
 */

function SearchResults() {
  const { items, message, hasMultiplePages, itemsQuantity } = useLoaderData();
  const [searchParams] = useSearchParams();

  return (
    <>
      <TitleBanner
        title={`Search results for: ${searchParams.get("q")}`}
        subtitle={`Number of artworks: ${itemsQuantity}`}
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

export default SearchResults;
