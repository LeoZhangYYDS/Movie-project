import MovieItem from "../movieItem/MovieItem";
import Hero from "../hero/Hero";
import styles from "./MovieList.module.scss";
const MovieList = (props) => {
  const { results } = props;

  return (
    <div className={styles.grid}>
      {results.map((result) => (
        <MovieItem
          key={result.id}
          title={result.title}
          name={result.name}
          rate={result.vote_average}
          poster_path={result.poster_path}
          release_date={result.release_date}
          first_air_date={result.first_air_date}
          overview={result.overview}
        />
      ))}
    </div>
  );
};

export default MovieList;
