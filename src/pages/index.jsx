import Hero from "@/components/hero/Hero.jsx";
import MovieList from "@/components/movieList/MovieList";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import BackToTop from "@/components/ui/BackToTop";
export default function Home() {
  const [query, setQuery] = useState("walking dead");
  const [results, setResults] = useState([]);

  useEffect(() => {
    //api call , search query changes based on user input.
    async function getData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
        );
        // set results to api data array
        setResults(res.data.results);
        // console.log(res.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [query]);
  //receive user input and setQuery to query,so the api can call on the users input
  const onChange = (value) => {
    setQuery(value);
  };
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Welcome to our Movie Website! Explore the latest blockbusters, in-depth film reviews, and a vast movie library. Watch trailers, teasers, and exclusive behind-the-scenes footage. Celebrate the art of filmmaking and immerse yourself in captivating stories and unforgettable characters."
        ></meta>
      </Head>
      <div className="homepage">
        <Hero
          bgImage="/images/heroImage.webp"
          // pass show = true to cover show=false in hero
          show={true}
          onChange={onChange}
        />
        {/* pass result to child and map */}
        <MovieList results={results} />
        {/* <BackToTop /> */}
      </div>
    </Fragment>
  );
}
