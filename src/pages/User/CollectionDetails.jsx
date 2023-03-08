import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import ArtworkList from "../../components/ArtworkList/Index";
import Collection from "../../components/Collection/Index";

function CollectionDetails() {
  const { collectionId } = useParams();
  const data = useSelector((state) =>
    state.collections.collections.find(
      (collection) => collection.id === collectionId
    )
  );
  const items = useLoaderData();
  return (
    <>
      <Collection items={items} data={data} />
    </>
  );
}

export default CollectionDetails;
