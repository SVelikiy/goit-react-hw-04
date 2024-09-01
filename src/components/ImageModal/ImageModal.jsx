import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ image, openModal, closeModal }) {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={image.alt}
    >
      <div className={css.container}>
        <div className={css.imageContainer}>
          <img className={css.image} src={image.src} alt={image.alt} />
        </div>
        <div className={css.infoContainer}>
          <p className={css.info}>Likes : {image.likes}</p>
          <p className={css.info}>Author : {image.username}</p>
          <a className={css.link} href={image.link}>
            Download
          </a>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
}
