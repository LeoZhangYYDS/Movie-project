import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./CenteredModal.module.scss";
import Image from "next/image";
//react bootstrap modal
function MyVerticallyCenteredModal(props) {
  const { title, name, image, release_date, first_air_date, overview } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title ? title : name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.box}>
        <div>
          <Image
            src={image}
            width={250}
            height={350}
            alt={title ? title : name}
          />
          <h6>Release Date: {release_date ? release_date : first_air_date}</h6>
        </div>
        <p>Overview: {overview}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
