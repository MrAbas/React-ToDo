import { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ToDoContext } from "../../providers/ToDoProvider";
import styles from "./modalToDo.module.scss";

export const ModalToDo = ({ show, close }) => {
  const textInput = useRef();
  const { addToDo } = useContext(ToDoContext);

  return (
    <div className="" style={{ display: "block", position: "initial" }}>
      <Modal show={show}>
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
              onClick={close}
              className={styles.btn_secondary}
              variant="secondary"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                addToDo(textInput);
                close();
              }}
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
