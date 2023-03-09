import { useRef } from "react";
import { useDispatch } from "react-redux";
import { collectionsActions } from "../../store/collections-slice";
import classes from "./AddCollection.module.css";

function AddCollection() {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      collectionsActions.create({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      })
    );

    if (1 === 0) {
      dispatch(
        collectionsActions.create({
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        })
      );
    }

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <>
      <h2>Create new collection</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" ref={titleRef} required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="textarea"
            name="description"
            ref={descriptionRef}
          />
        </div>
        <button type="submit">Add</button>
        <button>Cancel</button>
      </form>
    </>
  );
}

export default AddCollection;
