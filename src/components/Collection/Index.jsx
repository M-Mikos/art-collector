import Sidebar from "./Sidebar";
import ArtworkList from "../ArtworkList/Index";

function Collection(props) {
  const collection = props.collection;
  const items = props.data.items;
  const message = props.data.message;
  return (
    <>
      <Sidebar collection={collection} />
      <ArtworkList items={items} message={message} />
    </>
  );
}

export default Collection;
