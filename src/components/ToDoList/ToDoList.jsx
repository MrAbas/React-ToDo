import { ToDoItem } from "../ToDoItem/ToDoItem";
// import { inputValue } from "../../functions/inputValue";
import styles from "./ToDoList.module.scss";

export const ToDoList = () => {
  const getListFromStorage = () => {
    if (localStorage.toDoList) {
      return JSON.parse(localStorage.toDoList);
    }
    return [];
  };
  let storedObject = getListFromStorage();

  const listItem = storedObject.map((toDo) => {
    return <ToDoItem key={toDo.id} value={toDo.value} />;
  });

  return <ul className={styles.list}>{listItem}</ul>;
};
