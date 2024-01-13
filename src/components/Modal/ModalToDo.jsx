import { useRef } from "react";
// import { useState } from "react";
import addLocalStorage from "../../functions/addLocalStorage";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ModalInput } from "../ModalInput/ModalInput";
import styles from "./modalToDo.module.scss";

export const ModalToDo = ({ open = false, onClose }) => {
  // const [textInput, setTextInput] = useState("");

  let textInput = useRef(null);

  /* const inputValue = (e) => {
    let info = textInput.current.value;
    return info;
  }; */
  function Add(event) {
    addLocalStorage(textInput.current.value);
    onClose();
  }

  // console.log(textInput.current?.value);
  return (
    <div className="" style={{ display: "block", position: "initial" }}>
      <Modal show={open}>
        <Modal.Dialog
          className={styles.modalDialog}
          contentClassName={styles.modal_content}
        >
          <Modal.Header className={styles.modalHeader}>
            <Modal.Title className={styles.modalTitle}>New Note</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalBody}>
            <ModalInput
              value={textInput}
              /* onChange={(e) =>
                setTextInput(e.target.value)
              } */ ref={textInput}
            />
          </Modal.Body>

          <Modal.Footer className={styles.modalFooter}>
            <Button
              className={styles.btn_secondary}
              onClick={onClose}
              variant="secondary"
            >
              Close
            </Button>
            <Button
              onClick={Add}
              className={styles.btn_primary}
              variant="primary"
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};
