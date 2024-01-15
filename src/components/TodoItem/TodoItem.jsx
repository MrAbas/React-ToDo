import styles from "./ToDoItem.module.scss";

export const ToDoItem = (props) => {
  return (
    <li className={styles.note} key={props.id}>
      <input className={styles.checkbox_note} type="checkbox" />
      <h2 className={styles.text_note}>{props.value}</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button className={styles.btn_deleted}></button>
      </div>
    </li>
  );
};
