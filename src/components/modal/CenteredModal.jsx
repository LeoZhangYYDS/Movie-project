import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./CenteredModal.module.scss";
import Image from "next/image";
//react bootstrap modal
function MyVerticallyCenteredModal(props) {
  const { title, name, image, release_date, first_air_date, overview } = props;
  console.log(image);
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
      <Modal.Body>
        <div className={styles.box}>
          <Image scr={image} alt={title ? title : name} />
          <p>Release Date: {release_date ? release_date : first_air_date}</p>
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
