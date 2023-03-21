import { useRef } from "react";
import { useDispatch } from "react-redux";
import { collectionsActions } from "../../store/collections-slice";
import classes from "./AddCollection.module.css";

function AddCollection(props) {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (props.mode === "Add") {
      dispatch(
        collectionsActions.create({
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        })
      );
      props.showNotification("New collection added");
    }

    if (props.mode === "Edit") {
      console.log(
        "edit",
        props.collectionId,
        titleRef.current.value,
        descriptionRef.current.value
      );
      dispatch(
        collectionsActions.edit({
          collectionId: props.collectionId,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        })
      );
      props.showNotification("Collection updated");
    }

    // Close
    props.close();

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <>
      <h2>
        {props.mode === "Add" ? "Create new collection" : "Edit collection"}
      </h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            ref={titleRef}
            defaultValue={props.currentTitle}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="textarea"
            name="description"
            ref={descriptionRef}
            defaultValue={props.currentDescription}
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={props.close}>Cancel</button>
      </form>
    </>
  );
}

export default AddCollection;
