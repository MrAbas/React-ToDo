import { useContext } from "react";
import { ToDoItem } from "../ToDoItem/TodoItem";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./ToDoList.module.scss";

export const ToDoList = () => {
  const { todoList } = useContext(ToDoContext);
  const [theme] = useContext(ThemeContext);
  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      {todoList?.map((toDo) => {
        return <ToDoItem key={toDo.id} keyId={toDo.id} value={toDo.value} />;
      })}
    </ul>
  );
};
