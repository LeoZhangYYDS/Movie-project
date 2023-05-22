const MovieItem = (props) => {
  const { title, rate } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h1>{rate}</h1>
    </div>
  );
};

export default MovieItem;
