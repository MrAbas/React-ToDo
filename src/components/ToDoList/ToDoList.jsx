import { useContext } from "react";
import { ToDoItem } from "../ToDoItem/TodoItem";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useSelector } from "react-redux";
import styles from "./ToDoList.module.scss";

export const ToDoList = () => {
  // const { toDoList } = useContext(ToDoContext);
  const [theme] = useContext(ThemeContext);
  const toDoList = useSelector((state) => state.toDo.toDoList);

  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      {toDoList?.map((toDo) => {
        return (
          <ToDoItem
            key={toDo.id}
            id={toDo.id}
            value={toDo.value}
            checked={toDo.checked}
          />
        );
      })}
    </ul>
  );
};
