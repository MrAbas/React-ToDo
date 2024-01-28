import { useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";

const cn = classNames.bind(styles);

export const ToDoItem = (props) => {
  const { onDeleted, doneNote } = useContext(ToDoContext);
  const [theme] = useContext(ThemeContext);
  const [checked, setChecked] = useState(props.checked);
  return (
    <li className={styles.note}>
      <input
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          doneNote(props.id);
        }}
        className={`${styles.checkbox_note} `}
        type="checkbox"
      />
      <h2 className={cn("text_note", { theme, checked })}>{props.value}</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button
          onClick={() => {
            onDeleted(props.id);
          }}
          className={styles.btn_deleted}
        ></button>
      </div>
    </li>
  );
};
