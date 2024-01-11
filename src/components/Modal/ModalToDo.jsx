import { useRef } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "./modalToDo.module.scss";

export const ModalToDo = ({ open = false, onClose }) => {
  console.log(open);
  let textInput = useRef(null);
  console.log(textInput.current?.value);
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
            <input
              ref={textInput}
              type="text"
              className={styles.modal_input}
              placeholder="Input your note..."
              autoComplete="off"
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
            <Button variant="primary" className={styles.btn_primary}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};
