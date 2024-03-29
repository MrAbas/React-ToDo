import { ModalToDo } from "../Modal/ModalToDo";
import { Header } from "../Header/Header";
import { useState } from "react";
import { ToDoList } from "../ToDoList/ToDoList";
import { AddToDo } from "../AddToDo/AddToDo";
import { ToDoProvider } from "../../providers/ToDoProvider";
import styles from "./main.module.scss";

export const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <main className={`${styles.main}`}>
      <ToDoProvider>
        <Header />
        <ToDoList />
        <AddToDo onAddButton={onModalOpen} />
        <ModalToDo open={modalOpen} onClose={onModalOpen} />
      </ToDoProvider>
    </main>
  );
};
