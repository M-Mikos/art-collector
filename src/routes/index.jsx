import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import RootLayout from "../pages/Root";
import Favourites from "../pages/Favourites";
import Collections from "../pages/Collections";
import CollectionDetails from "../pages/CollectionDetails";
import ArtworkPage from "../pages/ArtworkPage";
import { loader as searchLoader } from "../pages/SearchResults";
import { loader as favLoader } from "../pages/Favourites";
import { loader as collectionDetailsLoader } from "../pages/CollectionDetails";
import { loader as artworkLoader } from "../components/Artwork/Index";
import SearchResults from "../pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: searchLoader,
      },

      {
        path: ":artworkId",
        element: <ArtworkPage />,
        loader: artworkLoader,
      },

      {
        path: "/search",
        element: <SearchResults />,
        loader: searchLoader,
      },

      {
        path: "/favourites",
        element: <Favourites />,
        loader: favLoader,
      },
      {
        path: "/collections",
        element: <Collections />,
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
