import Banner from "./Banner";
import ArtworkList from "../ArtworkList/Index";

function Collection(props) {
  const collection = props.collection;
  const items = props.data.items;
  const message = props.data.message;
  const thumbnail = props.data.items[0]["image_id"];
  return (
    <>
      <Banner collection={collection} items={items} thumbnail={thumbnail} />
      <ArtworkList items={items} message={message} infiniteScroll={false} />
    </>
  );
}

export default Collection;
