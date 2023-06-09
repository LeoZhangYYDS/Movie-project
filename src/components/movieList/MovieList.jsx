import MovieItem from "../movieItem/MovieItem";
import styles from "./MovieList.module.scss";
const MovieList = (props) => {
  const { results } = props;

  return (
    <div className={styles.grid}>
      {/* map out results and pass to child */}
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
