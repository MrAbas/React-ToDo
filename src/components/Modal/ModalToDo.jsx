import { useDispatch } from "react-redux";
import { addToDo, onDeleted, doneNote, increment } from "../../store/toDoSlice";
import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "./modalToDo.module.scss";

export const ModalToDo = () => {
  const { show, onModalShow, textInput } = useContext(ToDoContext);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToDo(textInput.current.value));
    onModalShow();
  };
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
              onClick={onModalShow}
              className={styles.btn_secondary}
              variant="secondary"
            >
              Close
            </Button>
            <Button
              onClick={add}
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
