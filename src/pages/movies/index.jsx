import MovieList from "@/components/movieList/MovieList";

const PopularMovie = (props) => {
  const { popularMovie } = props;
  return <MovieList movies={popularMovie} />;
};

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=36569278a9a0fc43b8198f3f7e34ccf9"
  );
  const data = await response.json();
  const movies = data.results;

  return {
    props: {
      popularMovie: movies,
    },
  };
};

export default PopularMovie;
