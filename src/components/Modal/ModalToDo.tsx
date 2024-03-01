import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToDo, onModalShow } from "../../store/toDoSlice";
import { useRef } from "react";
import { modalShowSelector } from "../../store/selectors";
import { useAppSelector } from "../../hooks/hook";
import styles from "./modalToDo.module.scss";

export const ModalToDo = () => {
  const textInput = useRef<HTMLInputElement>();

  const modalShow = useAppSelector(modalShowSelector);

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToDo(textInput.current.value));
    dispatch(onModalShow(modalShow));
  };

  const close = () => {
    dispatch(onModalShow(modalShow));
  };
  return (
    <div className="" style={{ display: "block", position: "initial" }}>
      <Modal show={modalShow}>
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
