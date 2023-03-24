import { ARTWORK_PROPS, API_URL } from "../../../config";

import Back from "./Back";
import Details from "./Details";
import Display from "./Display";
import Title from "./Title";
import Actions from "./Actions";
import Terms from "./Terms";

import classes from "./Index.module.css";
import { useLocation } from "react-router-dom";

function Artwork(props) {
  const {
    id,
    title,
    dimensions,
    image_id: imgId,
    alt_text: altText,
    medium_display: medium,
    place_of_origin: place,
    artist_title: artist,
    style_title: style,
    date_display: date,
    term_titles: terms,
  } = props.data.data;

  let { state } = useLocation();

  return (
    <>
      <div className={classes.background}></div>
      <div className={classes.content}>
        {state && <Back path={state} />}
        <Display imgId={imgId} altText={altText} />
        <div className="">
          <Title title={title} date={date} artist={artist} />
          <Actions id={id} />
        </div>

        <Details
          imgId={imgId}
          altText={altText}
          data={{
            title,
            artist,
            place,
            date,
            style,
            medium,
            dimensions,
            id,
          }}
        />
        <Terms terms={terms} />
      </div>
    </>
  );
}

export default Artwork;

export async function loader({ params }) {
  const response = await fetch(
    `${API_URL}/${params.artworkId}?fields=${ARTWORK_PROPS}`
  );

  if (!response.ok) {
    return json({ message: "Couldn't fetch data" }, { status: 500 });
  }

  const data = await response.json();

  return data;
}
