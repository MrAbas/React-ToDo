import { useState } from "react";
import addToDo from "./AddToDo.module.scss";

export const AddToDo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onAddButton = () => {
    setModalOpen(!modalOpen);
  };

  return <button onClick={onAddButton} className={addToDo.add_btn}></button>;
};
