import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import RootLayout from "../pages/Root";
import Favourites from "../pages/Favourites";
import Collections from "../pages/Collections";
import CollectionDetails from "../pages/CollectionDetails";
import ArtworkPage from "../pages/ArtworkPage";
import SearchResults from "../pages/SearchResults";
import searchResultsLoader from "../pages/loaders/searchResultsLoader";
import favouritesLoader from "../pages/loaders/favouritesLoader";
import collectionDetailsLoader from "../pages/loaders/collectionDetailsLoader";
import collectionListLoader from "../pages/loaders/collectionListLoader";
import artworkLoader from "../pages/loaders/artworkLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: searchResultsLoader,
      },

      {
        path: ":artworkId",
        element: <ArtworkPage />,
        loader: artworkLoader,
      },

      {
        path: "/search",
        element: <SearchResults />,
        loader: searchResultsLoader,
      },

      {
        path: "/favourites",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/collections",
        element: <Collections />,
        loader: collectionListLoader,
      },

      {
        path: "/collections/:collectionId",

        element: <CollectionDetails />,
        loader: collectionDetailsLoader,
      },
    ],
  },
]);

export default router;
