import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
// import { ToDoContext } from "../../providers/ToDoProvider";
import { ToDoItem } from "../ToDoItem/TodoItem";
import styles from "./ToDoList.module.scss";
import { useSelector } from "react-redux";

export const ToDoList = () => {
  const [theme] = useContext(ThemeContext);
  // const { toDoList } = useContext(ToDoContext);
  const toDoList = useSelector((state) => state.todo.toDoListCurrent);

  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      {toDoList?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};
