import { IIIF_URL } from "../../../config";

function Display(props) {
  return (
    <img
      alt={props.altText}
      src={`${IIIF_URL}/${props.imgId}/full/843,/0/default.jpg`}
    />
  );
}

export default Display;
