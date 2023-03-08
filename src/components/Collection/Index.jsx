import Sidebar from "./Sidebar";
import ArtworkList from "../ArtworkList/Index";

function Collection(props) {
  return (
    <>
      <Sidebar data={props.data} />
      <ArtworkList items={props.items} />
    </>
  );
}

export default Collection;
