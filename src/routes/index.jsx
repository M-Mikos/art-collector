import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import RootLayout from "../pages/Root";
import UserRoot from "../pages/user/UserRoot";
import UserFavList from "../pages/User/UserFavList";
import UserCollectionList from "../pages/user/UserCollectionsList";
import EditCollection from "../pages/user/EditCollection";
import CollectionDetails from "../pages/user/CollectionDetails";
import ArtworkPage from "../pages/ArtworkPage";
import { loader as searchLoader } from "../pages/SearchResults";
import { loader as favLoader } from "../pages/User/UserFavList";
import { loader as collectionDetailsLoader } from "../pages/user/CollectionDetails";
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
        path: "/my-account",
        element: <UserRoot />,
        children: [
          {
            index: true,
            element: <UserFavList />,
            loader: favLoader,
          },
          {
            path: "collections",
            element: <UserCollectionList />,
          },
        ],
      },
      {
        path: "/my-account/collections/:collectionId",
        children: [
          {
            index: true,
            element: <CollectionDetails />,
            loader: collectionDetailsLoader,
          },
          {
            path: "edit",
            element: <EditCollection />,
          },
        ],
      },
    ],
  },
]);

export default router;
