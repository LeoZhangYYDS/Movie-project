import MovieList from "@/components/movieList/MovieList";
import Hero from "@/components/hero/Hero.jsx";
import { Fragment } from "react";
const PopularMovie = (props) => {
  const { results } = props;

  return (
    <Fragment>
      <Hero bgImage="/images/heroImage1.jpg" />
      <MovieList results={results} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.MOVIE_API_KEY}`
  );
  const data = await response.json();
  const popularMovies = data.results;

  return {
    props: {
      results: popularMovies,
    },
    revalidate: 600,
  };
};

export default PopularMovie;
