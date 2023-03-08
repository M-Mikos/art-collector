import Actions from "./Actions";

function Sidebar(props) {
  return (
    <>
      <h1>{props.data.title}</h1>
      <p>{props.data.id}</p>
      <p>{props.data.description}</p>
      <Actions />
    </>
  );
}

export default Sidebar;
