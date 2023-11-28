import Banner from "./Banner";
import ArtworkList from "../ArtworkList/Index";

/**
 * Component for displaying collection details layout.
 * @param {Object} props
 * @param {Object[]} props.items collection artworks
 * @param {Object} props.collection collection details
 * @param {string} props.message optional error/information message
 * @returns JSX code with Collection component.
 */

function Collection(props) {
  console.log("Rendering Collection");
  const { collection, items, message } = props;
  const thumbnail = items[0] ? items[0]["image_id"] : null;

  return (
    <>
      <Banner
        id={collection.id}
        title={collection.title}
        description={collection.description}
        count={items.length}
        thumbnail={thumbnail}
      />
      <ArtworkList items={items} message={message} infiniteScroll={false} />
    </>
  );
}

export default Collection;
