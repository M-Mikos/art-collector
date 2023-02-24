import { ARTWORKS_URL, IIIF_URL } from "../../../config";

function Details(props) {
  const data = Object.entries(props.data);
  return (
    <>
      <div>
        <ul>
          {data.map((item) => {
            return (
              <li key={item[0]}>
                <span>{item[0]}: </span>
                <span>{item[1]}</span>
              </li>
            );
          })}
          <li>
            <span>Read more at: </span>
            <span>
              <a
                href={`${ARTWORKS_URL}${props.data.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Art Institute of Chicago
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <img
          alt={props.altText}
          src={`${IIIF_URL}/${props.imgId}/full/400,/0/default.jpg`}
        />
      </div>
    </>
  );
}

export default Details;
