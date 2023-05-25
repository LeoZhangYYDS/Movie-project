import Hero from "@/components/hero/Hero.jsx";
import MovieList from "@/components/movieList/MovieList";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
export default function Home() {
  const [query, setQuery] = useState("walking dead");
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=36569278a9a0fc43b8198f3f7e34ccf9`
        );
        setResults(res.data.results);
        console.log(res.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [query]);
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
          show={true}
          onChange={onChange}
        />
        <MovieList results={results} />
      </div>
    </Fragment>
  );
}
