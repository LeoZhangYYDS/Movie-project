import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/">
          <span>
            Home <span>Theater</span>
          </span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/movies">Popular Movies</Link>
          </li>
          <li>
            <Link href="/movies/upcoming">Up Coming Movies</Link>
          </li>
          <li>
            <Link href="/movies/toprated">Top Rated Movies</Link>
          </li>
          <li>
            <Link href="/tvshows">Popular Shows</Link>
          </li>
          <li>
            <Link href="/tvshows/airingtoday">Shows Airing Today</Link>
          </li>
          <li>
            <Link href="/tvshows/toprated">Top Rated Shows</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
