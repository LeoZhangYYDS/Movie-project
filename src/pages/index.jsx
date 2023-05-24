import Hero from "@/components/hero/Hero.jsx";
import MovieItem from "@/components/movieItem/MovieItem";

export default function Home() {
  return (
    <div>
      <Hero bgImage="/images/heroImage.jpg" />
      <MovieItem />
    </div>
  );
}
