import { ToDoItem } from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.scss";

export const ToDoList = () => {
  //localstorage
  return (
    <ul className={styles.list}>
      {/* localstorage.map((item)=>{
return <ToDoItem id={item.id} text />
}) */}
      <ToDoItem />
    </ul>
  );
};
