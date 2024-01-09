import { useState } from "react";
import "./App.scss";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

const ModalToDo = ({ open, onClose }) => {
  const [modalOpen, setModalOpen] = useState("");
  useEffect(() => {
    if (open) {
      setModalOpen("modal show");
    } else {
      setModalOpen("");
    }
  }, [open]); // каждый раз когда open меняется запускается useEffect

  console.log(open);
  return (
    <div
      className={modalOpen} // заменить на classNames
      style={{ display: "block", position: "absolute" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
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

export default ModalToDo;
