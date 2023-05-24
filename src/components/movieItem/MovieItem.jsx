import { useState } from "react";
import styles from "./MovieItem.module.scss";
import MyVerticallyCenteredModal from "../modal/CenteredModal";
import Image from "next/image";

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
    <div class="card" style={{ width: "16rem" }}>
      <Image
        src={image}
        className={styles.image}
        alt={title}
        width={255}
        height={300}
      />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}> {title ? title : name}</h5>
        <p>Rate: {rate}</p>

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => setModalShow(true)}
        >
          More Info
        </button>
      </div>
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
    </div>
  );
}

export default MovieItem;
