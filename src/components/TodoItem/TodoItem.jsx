import styles from "./ToDoItem.module.scss";

export const ToDoItem = () => {
  //сделать ключи
  return (
    <li className={styles.note}>
      <input className={styles.checkbox_note} type="checkbox" />
      <h2 className={styles.text_note}>1</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button className={styles.btn_deleted}></button>
      </div>
    </li>
  );
};
