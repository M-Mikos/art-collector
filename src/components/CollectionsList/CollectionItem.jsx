import classes from "./CollectionItem.module.css";

function Collection(props) {
  return (
    <article>
      <h2>{props.data.title}</h2>
    </article>
  );
}

export default Collection;
