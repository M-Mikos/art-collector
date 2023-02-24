import Card from "../UI/Card";
import CollectionItem from "./CollectionItem";

import classes from "./Index.module.css";
import { Link } from "react-router-dom";

const COLLECTIONS = [
  { id: "c1", title: "Kolekcja 1" },
  { id: "c2", title: "Kolekcja 2" },
  { id: "c3", title: "Kolekcja 3" },
  { id: "c4", title: "Kolekcja 4" },
  { id: "c5", title: "Kolekcja 5" },
  { id: "c6", title: "Kolekcja 6" },
];

function CollectionsList() {
  return (
    <ul className={classes["items-grid"]}>
      {COLLECTIONS.map((collection) => (
        <li key={collection.id} className={classes.item}>
          <Link to={collection.id}>
            <Card>
              <CollectionItem data={collection} />
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CollectionsList;
