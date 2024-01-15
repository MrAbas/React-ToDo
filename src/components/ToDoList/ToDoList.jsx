import { useContext } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.scss";

import { ToDoContext } from "../../providers/ToDoProvider";

export const ToDoList = () => {
  const { todoList } = useContext(ToDoContext);

  return (
    <ul className={styles.list}>
      {todoList?.map((toDo) => {
        return <ToDoItem key={toDo.id} value={toDo.value} />;
      })}
    </ul>
  );
};
