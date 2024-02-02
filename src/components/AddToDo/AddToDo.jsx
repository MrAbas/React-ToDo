import styles from "./AddToDo.module.scss";

export const AddToDo = ({ onAddButton }) => {
  return <button onClick={onAddButton} className={styles.add_btn}></button>;
};
