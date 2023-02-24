import Modal from "../UI/ModalPage";
import classes from "./AddCollection.module.css";

function AddCollection() {
  return (
    <Modal>
      <h2>Stwórz nową kolekcję</h2>
      <form>
        <div>
          <label htmlFor="title">Tytuł</label>
          <input id="title" type="text" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Opis</label>
          <input id="description" type="textarea" name="description" />
        </div>
        <button type="submit">Ok</button>
      </form>
    </Modal>
  );
}

export default AddCollection;
