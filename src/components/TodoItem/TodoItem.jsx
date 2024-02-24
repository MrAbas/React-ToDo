import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";

const cn = classNames.bind(styles);

export const ToDoItem = (props) => {
  const [theme] = useContext(ThemeContext);

  return (
    <li className={styles.note}>
      <input className={`${styles.checkbox_note}`} type="checkbox" />
      <h2 className={cn("text_note", theme)}>1</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button className={styles.btn_deleted}></button>
      </div>
    </li>
  );
};
