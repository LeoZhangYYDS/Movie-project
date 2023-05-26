import styles from "./Hero.module.scss";
import Button from "../ui/Button";
import { useState } from "react";

const Hero = (props) => {
  const { bgImage, onChange, show = false } = props;
  const [input, setInput] = useState("");
  //set input to user input
  function handleChange(e) {
    setInput(e.target.value);
  }
  //when click the button pass user input value to onChange,so the parent can get the value
  const handleClick = () => {
    onChange(input);
  };

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.cover}>
        <h1>Welcome.</h1>
        <h4>Millions of movies and TV shows. Explore now.</h4>
        {/* if show = false , do not render input and button  */}
        {show && (
          <div className={styles.input}>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Search for Movies,TV Shows..."
            />
            <Button onClick={handleClick}>Search</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
