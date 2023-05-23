import MovieList from "@/components/movieList/MovieList";
import Hero from "@/components/hero/Hero.jsx";
import { Fragment } from "react";

const TopRated = (props) => {
  const { results } = props;
  return (
    <Fragment>
      <Hero bgImage="/images/heroImage3.jpg" />
      <MovieList results={results} />
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${process.env.MOVIE_API_KEY}`
  );
  const data = await response.json();
  const TopRated = data.results;

  return {
    props: {
      results: TopRated,
    },
  };
};

export default TopRated;
