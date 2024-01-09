import { ToDoItem } from "../ToDoItem/ToDoItem";
import styles from "./styles.module.scss";

export const ToDoList = () => {
  return (
    <ul id="list" className={styles.list}>
      <ToDoItem />
    </ul>
  );
};
