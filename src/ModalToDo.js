import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import modalToDo from "./modalToDo.module.scss";
import "./App.scss";
import Modal from "react-bootstrap/Modal";

export const ModalToDo = ({ open, onClose }) => {
  const [modalOpen, setModalOpen] = useState("");
  useEffect(() => {
    if (open) {
      setModalOpen("modal show");
    } else {
      setModalOpen("");
    }
  }, [open]); // каждый раз когда open меняется запускается useEffect

  return (
    <div
      className={modalOpen} // заменить на classNames
      style={{ display: "block", position: "absolute" }}
    >
      <Modal.Dialog className={modalToDo.modal_content}>
        <Modal.Header className={modalToDo.modalHeader} closeButton>
          <Modal.Title className={modalToDo.modalTitle}>
            Modal title
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            className={modalToDo.modal_input}
            /*   placeholder="Input your note..."
            autoComplete="off" */
          />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
