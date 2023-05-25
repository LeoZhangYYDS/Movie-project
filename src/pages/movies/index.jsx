import MovieList from "@/components/movieList/MovieList";
import Hero from "@/components/hero/Hero.jsx";
import { Fragment } from "react";
import Head from "next/head";
const PopularMovie = (props) => {
  const { results } = props;

  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Welcome to our Movie Website! Explore the latest blockbusters, in-depth film reviews, and a vast movie library. Watch trailers, teasers, and exclusive behind-the-scenes footage. Celebrate the art of filmmaking and immerse yourself in captivating stories and unforgettable characters."
        ></meta>
      </Head>
      <Hero bgImage="/images/heroImage1.webp" />
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
