function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <span>{props.artist}</span>
      <span>{props.date}</span>
    </>
  );
}

export default Title;
