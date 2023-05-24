import styles from "./Hero.module.scss";
import Button from "../ui/Button";
import { useState } from "react";
import MovieList from "../movieList/MovieList";

const Hero = (props) => {
  const { bgImage } = props;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&include_adult=false&language=en-US&page=1&api_key=36569278a9a0fc43b8198f3f7e34ccf9`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div className={styles.main} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.cover}>
        <h1>Welcome.</h1>
        <h4>Millions of movies and TV shows. Explore now.</h4>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Search for Movies,TV Shows..."
            value={query}
            onChange={onChange}
          />
          <Button>Search</Button>
        </div>
      </div>
      <MovieList results={results} />
    </div>
  );
};

export default Hero;
