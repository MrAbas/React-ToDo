import { ModalToDo } from "../Modal/ModalToDo";
import { Header } from "../Header/Header";
import { useState } from "react";
import { ToDoList } from "../ToDoList/ToDoList";
import { AddToDo } from "../AddToDo/AddToDo";
import styles from "./main.module.scss";
import { ToDoProvider } from "../../providers/ToDoProvider";

export const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onAddButton = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <main className={styles.main}>
      <ToDoProvider>
        <Header />
        <ToDoList />
        <AddToDo onAddButton={onAddButton} />
        <ModalToDo open={modalOpen} onClose={onAddButton} />
      </ToDoProvider>
    </main>
  );
};
