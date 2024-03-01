import { ModalToDo } from "../Modal/ModalToDo";
import { Header } from "../Header/Header";
import { ToDoList } from "../ToDoList/ToDoList";
import { AddToDo } from "../AddToDo/AddToDo";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <main className={`${styles.main}`}>
      <Header />
      <ToDoList />
      <AddToDo />
      <ModalToDo />
    </main>
  );
};
