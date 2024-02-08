import { useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoContext } from "../../providers/ToDoProvider";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";

const cn = classNames.bind(styles);

export const ToDoItem = (props) => {
  const [theme] = useContext(ThemeContext);
  const { onDeleted } = useContext(ToDoContext);
  const [editMode, setEditMode] = useState(false);
  const editToDoText = () => {
    setEditMode(!editMode);
  };
  return (
    <li className={styles.note}>
      <input className={`${styles.checkbox_note} `} type="checkbox" />)
      {!editMode && <h2 className={cn("text_note", theme)}>{props.value}</h2>}
      <div className={styles.btns_note}>
        <button onClick={editToDoText} className={styles.btn_change}></button>
        <button
          onClick={() => onDeleted(props.id)}
          className={styles.btn_deleted}
        ></button>
      </div>
    </li>
  );
};
