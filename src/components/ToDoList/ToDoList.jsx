import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ToDoItem } from "../ToDoItem/TodoItem";
import styles from "./ToDoList.module.scss";

export const ToDoList = () => {
  const [theme] = useContext(ThemeContext);
  const { toDoList } = useContext(ToDoContext);

  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      {toDoList?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};
