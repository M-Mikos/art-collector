import Sidebar from "./Sidebar";
import ArtworkList from "../ArtworkList/Index";

function Collection(props) {
  return (
    <>
      <Sidebar collection={props.collection} />
      <ArtworkList data={props.data} />
    </>
  );
}

export default Collection;
