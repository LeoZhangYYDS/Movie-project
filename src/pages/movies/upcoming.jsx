import MovieList from "@/components/movieList/MovieList";
import Hero from "@/components/hero/Hero.jsx";
import { Fragment } from "react";
const UpComing = (props) => {
  const { results } = props;
  return (
    <Fragment>
      <Hero bgImage="/images/heroImage2.jpg" />
      <MovieList results={results} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.MOVIE_API_KEY}`
  );
  const data = await response.json();
  const upComingMovie = data.results;

  return {
    props: {
      results: upComingMovie,
    },
    revalidate: 600,
  };
};

export default UpComing;
