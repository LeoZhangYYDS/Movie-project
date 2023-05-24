import MovieList from "@/components/movieList/MovieList";
import Hero from "@/components/hero/Hero.jsx";
import { Fragment } from "react";

const Toprated = (props) => {
  const { results } = props;
  return (
    <Fragment>
      <Hero bgImage="/images/heroImage6.jpg" />
      <MovieList results={results} />
    </Fragment>
  );
};
export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${process.env.MOVIE_API_KEY}`
  );
  const data = await response.json();
  const topRated = data.results;

  return {
    props: {
      results: topRated,
    },
    revalidate: 600,
  };
};

export default Toprated;
