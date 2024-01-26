import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./ToDoItem.module.scss";

export const ToDoItem = (props) => {
  const { onDeleted } = useContext(ToDoContext);
  const [theme] = useContext(ThemeContext);
  console.log(props);
  return (
    <li className={styles.note}>
      <input className={`${styles.checkbox_note} `} type="checkbox" />
      <h2 className={`${styles.text_note} ${styles[theme]}`}>{props.value}</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button
          onClick={() => {
            onDeleted(props.keyId);
          }}
          className={styles.btn_deleted}
        ></button>
      </div>
    </li>
  );
};
