import styles from "./ToDoItem.module.scss";

export const ToDoItem = () => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const key = getRandomInt(10000);
  let keys = [];
  keys.push(key);

  //сделать ключи
  return (
    <li className={styles.note} key={keys.toString()}>
      <input className={styles.checkbox_note} type="checkbox" />
      <h2 className={styles.text_note}>1</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button className={styles.btn_deleted}></button>
      </div>
    </li>
  );
};
