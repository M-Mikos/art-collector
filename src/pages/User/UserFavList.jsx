import { useLoaderData } from "react-router-dom";
import ArtworkList from "../../components/ArtworkList";

function UserFavList() {
  const items = useLoaderData();
  return (
    <>
      <ArtworkList items={items} />
    </>
  );
}

export default UserFavList;
