import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import ArtworkList from "../../components/ArtworkList/Index";
import Collection from "../../components/Collection/Index";

function CollectionDetails() {
  const { collectionId } = useParams();
  const collection = useSelector((state) =>
    state.collections.collections.find(
      (collection) => collection.id === collectionId
    )
  );
  const data = useLoaderData();
  return (
    <>
      <Collection data={data} collection={collection} />
    </>
  );
}

export default CollectionDetails;
