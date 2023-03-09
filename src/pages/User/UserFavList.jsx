import { useLoaderData } from "react-router-dom";
import ArtworkList from "../../components/ArtworkList";

function UserFavList() {
  const data = useLoaderData();
  return (
    <>
      <ArtworkList data={data} />
    </>
  );
}

export default UserFavList;
