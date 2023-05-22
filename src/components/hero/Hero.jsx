import styles from "./Hero.module.scss";
import Button from "../ui/Button";
const Hero = (props) => {
  const { bgImage } = props;
  return (
    <div className={styles.main} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.cover}>
        <h1>Welcome.</h1>
        <h4>Millions of movies and TV shows. Explore now.</h4>
        <div className={styles.input}>
          <input type="text" placeholder="Search for Movies,TV Shows..." />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
