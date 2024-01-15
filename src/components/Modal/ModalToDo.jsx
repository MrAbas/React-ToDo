import { useContext, useState } from "react";
import addLocalStorage from "../../shared/helpers/addLocalStorage";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "./modalToDo.module.scss";
import { ToDoContext } from "../../providers/ToDoProvider";

export const ModalToDo = ({ open = false, onClose }) => {
  const [textInput, setTextInput] = useState("");
  const { addTodo } = useContext(ToDoContext);
  const onChangeInput = (e) => {
    setTextInput(e.target.value);
  };
  //TODO сделать ref
  function add() {
    addTodo(textInput);
    addLocalStorage(textInput);
    onClose();
    setTextInput("");
  }

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
              value={textInput}
              type="text"
              onChange={onChangeInput}
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
