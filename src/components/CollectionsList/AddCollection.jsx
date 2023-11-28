import { useRef } from "react";
import { useDispatch } from "react-redux";
import { collectionsActions } from "../../store/collections-slice";
import { uiActions } from "../../store/ui-slice";
import useNotification from "../../hooks/useNotification";
import classes from "./AddCollection.module.css";

/**
 * Component for displaying and controlling add collection form.
 * Component is used for creacting and editing collections.
 * Component dispatches modification on collections data in React Redux store
 * @param {Object} props
 * @param {"add" | "edit"} props.mode form configuration with "add" keyword for creating new collection and "edit" for changing existing collection's description.
 * @param {string} props.currentTitle collection title.
 * @param {string} props.currentDescription collection description.
 * @param {string} props.collectionId collection id.
 * @returns JSX code with AddCollection form component.
 */

function AddCollection(props) {
  console.log("Rendering AddCollection");
  const { mode, currentTitle, currentDescription, collectionId } = props;
  const dispatch = useDispatch();
  const [showNotification] = useNotification();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const toggleModal = () => {
    dispatch(uiActions.toggleModal());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const collectionData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };

    if (mode === "add") {
      dispatch(collectionsActions.create(collectionData));
      showNotification("New collection added");
    }

    if (mode === "edit") {
      dispatch(
        collectionsActions.edit({
          collectionId,
          ...collectionData,
        })
      );
      showNotification("Collection updated");
    }

    toggleModal();

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div className={classes.form__wrapper}>
      <h2>{mode === "add" ? "Create new collection" : "Edit collection"}</h2>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            ref={titleRef}
            defaultValue={currentTitle}
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
            defaultValue={currentDescription}
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
