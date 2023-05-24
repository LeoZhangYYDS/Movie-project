import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import styles from "./MovieItem.module.scss";
import MyVerticallyCenteredModal from "../modal/CenteredModal";

function MovieItem(props) {
  const {
    title,
    rate,
    poster_path,
    name,
    release_date,
    first_air_date,
    overview,
  } = props;
  const [modalShow, setModalShow] = useState(false);
  const image = `https://image.tmdb.org/t/p/w200${poster_path}`;

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={image}
        className={styles.image}
        alt={title}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>
          {title ? title : name}
        </Card.Title>
        <Card.Text>Rate: {rate}</Card.Text>
        <Button
          variant="primary"
          className="left"
          onClick={() => setModalShow(true)}
        >
          More Info
        </Button>
        {/* passing data to child */}
        <MyVerticallyCenteredModal
          show={modalShow}
          image={image}
          title={title}
          name={name}
          release_date={release_date}
          first_air_date={first_air_date}
          overview={overview}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
