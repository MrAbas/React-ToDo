import styles from "./ToDoItem.module.scss";

export const ToDoItem = (props) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const key = getRandomInt(10000);
  let keys = [];
  keys.push(key);

  return (
    <li className={styles.note} key={key.toString()}>
      <input className={styles.checkbox_note} type="checkbox" />
      <h2 className={styles.text_note}>{props.value}</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button className={styles.btn_deleted}></button>
      </div>
    </li>
  );
};
