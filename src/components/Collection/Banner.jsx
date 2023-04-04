import Actions from "./Actions";

function Banner(props) {
  return (
    <>
      <h1>{props.collection.title}</h1>
      <p>ID: {props.collection.id}</p>
      <p>Description: {props.collection.description}</p>
      <p>Items number: {props.items.length}</p>
      <Actions
        collectionId={props.collection.id}
        currentTitle={props.collection.title}
        currentDescription={props.collection.description}
      />
    </>
  );
}

export default Banner;
