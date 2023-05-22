import { Fragment } from "react";
import MovieItem from "../movieItem/MovieItem";

const MovieList = (props) => {
  const { movies } = props;
  console.log(movies);
  return (
    <div>
      movielist
      {movies.map((movie) => {
        <MovieItem
          key={movie.id}
          title={movie.title}
          rate={movie.vote_average}
        />;
      })}
    </div>
  );
};

export default MovieList;
