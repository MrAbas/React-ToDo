import { ToDoItem } from "../ToDoItem/ToDoItem";
// import { inputValue, ModalToDo } from "../Modal/ModalToDo";
import styles from "./ToDoList.module.scss";

export const ToDoList = () => {
  /* const getListFromStorage = () => {
    if (localStorage.toDoList) {
      return JSON.parse(localStorage.toDoList);
    }
    return [];
  };

  const setListToStorage = (newArr) => {
    localStorage.toDoList = JSON.stringify(newArr);
  }; */
  //localstorage
  /* if (localStorage.toDoList) {
  } else {
    localStorage.toDoList = JSON.stringify(inputValue);
  } */
  return (
    <ul className={styles.list}>
      {/* localstorage.map((item)=>{
return <ToDoItem id={item.id} text />
}) */}
      <ToDoItem />
    </ul>
  );
};
