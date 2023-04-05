function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <span>
        {props.artist}, {props.date}
      </span>
    </>
  );
}

export default Title;
