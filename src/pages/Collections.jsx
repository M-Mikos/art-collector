import React from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import CollectionsList from "../components/CollectionsList/Index.jsx";
import TitleBanner from "../components/UI/TitleBanner.jsx";

/**
 * Page component for displaying Collections page.
 * Gets artwork data from React Router Loader.
 * Gets collections data from React Redux state.
 *
 * @returns React fragment with TitleBanner and CollectionsList React components
 */

function Collections() {
  console.log("rendering Collections Page");
  const collections = useLoaderData();
  const collectionsQuantity = useSelector(
    (state) => state.collections.collections.length
  );

  const subtitle =
    collectionsQuantity === 1
      ? `You have 1 collection.`
      : `You have ${collectionsQuantity} collections.`;

  return (
    <>
      <TitleBanner title="Collections" subtitle={subtitle} />
      <CollectionsList thumbnails={collections} />
    </>
  );
}

export default Collections;
