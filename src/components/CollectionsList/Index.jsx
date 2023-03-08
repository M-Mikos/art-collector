import Card from "../UI/Card";
import CollectionItem from "./CollectionItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Index.module.css";

function CollectionsList() {
  const collections = useSelector((state) => state.collections.collections);

  return (
    <>
      {" "}
      <button>Dodaj kolekcję</button>
      <ul className={classes["items-grid"]}>
        {collections.map((collection) => (
          <li key={collection.id} className={classes.item}>
            <Link to={collection.id}>
              <Card>
                <CollectionItem data={collection} />
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CollectionsList;
