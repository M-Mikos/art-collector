import Actions from "./Actions";

function Sidebar(props) {
  return (
    <>
      <h1>{props.collection.title}</h1>
      <p>ID: {props.collection.id}</p>
      <p>Description: {props.collection.description}</p>
      <Actions />
    </>
  );
}

export default Sidebar;
