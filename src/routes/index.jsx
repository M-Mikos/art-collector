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
import { loader as artworkLoader } from "../components/Artwork/Index";
import { loader as artworksListLoader } from "../components/ArtworkList";
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
        loader: artworksListLoader,
      },

      {
        path: ":artworkId",
        element: <ArtworkPage />,
        loader: artworkLoader,
      },

      {
        path: "/search",
        element: <SearchResults />,
        loader: artworksListLoader,
      },

      {
        path: "/my-account",
        element: <UserRoot />,
        children: [
          {
            index: true,
            element: <UserFavList />,
            loader: artworksListLoader,
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
