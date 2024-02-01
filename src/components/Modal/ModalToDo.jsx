import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "./modalToDo.module.scss";

export const ModalToDo = () => {
  return (
    <div className="" style={{ display: "block", position: "initial" }}>
      <Modal>
        <Modal.Dialog
          className={styles.modalDialog}
          contentClassName={styles.modal_content}
        >
          <Modal.Header className={styles.modalHeader}>
            <Modal.Title className={styles.modalTitle}>New Note</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalBody}>
            <input
              type="text"
              className={styles.modal_input}
              placeholder="Input your note..."
              autoComplete="off"
            />
          </Modal.Body>

          <Modal.Footer className={styles.modalFooter}>
            <Button className={styles.btn_secondary} variant="secondary">
              Close
            </Button>
            <Button className={styles.btn_primary} variant="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};
