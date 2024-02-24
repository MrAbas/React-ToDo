import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoItem } from "../ToDoItem/TodoItem";
import styles from "./ToDoList.module.scss";

export const ToDoList = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      <ToDoItem />
    </ul>
  );
};
