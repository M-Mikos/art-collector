import { useRef } from "react";
import { useDispatch } from "react-redux";
import { collectionsActions } from "../../store/collections-slice";
import { uiActions } from "../../store/ui-slice";
import useNotification from "../../hooks/useNotification";
import classes from "./AddCollection.module.css";

function AddCollection(props) {
  const dispatch = useDispatch();
  const [showNotification] = useNotification();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const toggleModal = () => {
    dispatch(uiActions.toggleModal());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (props.data.mode === "add") {
      dispatch(
        collectionsActions.create({
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        })
      );
      showNotification("New collection added");
    }

    if (props.data.mode === "edit") {
      dispatch(
        collectionsActions.edit({
          collectionId: props.data.collectionId,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        })
      );
      showNotification("Collection updated");
    }

    // Close
    toggleModal();

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div className={classes["form__wrapper"]}>
      <h2>
        {props.data.mode === "add"
          ? "Create new collection"
          : "Edit collection"}
      </h2>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            ref={titleRef}
            defaultValue={props.data.currentTitle}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="textarea"
            name="description"
            ref={descriptionRef}
            defaultValue={props.data.currentDescription}
          />
        </div>
        <div className={classes["form__actions"]}>
          <button type="submit" className={classes.submit}>
            Submit
          </button>
          <button onClick={toggleModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddCollection;
