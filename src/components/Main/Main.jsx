import { ModalToDo } from "../Modal/ModalToDo";
import { Header } from "../Header/Header";
import { ToDoList } from "../ToDoList/ToDoList";
import { AddToDo } from "../AddToDo/AddToDo";
import { ToDoProvider } from "../../providers/ToDoProvider";
import styles from "./main.module.scss";
import { useState } from "react";

export const Main = () => {
  const [show, setShow] = useState(false);

  const onModalShow = () => {
    setShow(!show);
  };
  return (
    <main className={`${styles.main}`}>
      <ToDoProvider>
        <Header />
        <ToDoList />
        <AddToDo onAddButton={onModalShow} />
        <ModalToDo show={show} close={onModalShow} />
      </ToDoProvider>
    </main>
  );
};
