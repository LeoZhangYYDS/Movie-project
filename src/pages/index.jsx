import Hero from "@/components/hero/Hero.jsx";
import MovieList from "@/components/movieList/MovieList";
import { useEffect, useState } from "react";
export default function Home() {
  const [query, setQuery] = useState("walking dead");
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=36569278a9a0fc43b8198f3f7e34ccf9`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data.results);
        } else {
          setResults([]);
        }
      });
  }, [query]);
  const onChange = (value) => {
    setQuery(value);
  };
  return (
    <div className="homepage">
      <Hero bgImage="/images/heroImage.jpg" show={true} onChange={onChange} />
      <MovieList results={results} />
    </div>
  );
}
