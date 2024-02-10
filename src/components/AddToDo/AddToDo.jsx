import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import styles from "./AddToDo.module.scss";

export const AddToDo = () => {
  const { onModalShow } = useContext(ToDoContext);
  return <button onClick={onModalShow} className={styles.add_btn}></button>;
};
