import styles from "./search.module.scss";

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        id="inputSearch"
        className={styles.input_search}
        placeholder="Search note..."
        autoComplete="off"
      ></input>
      <button id="btnSearch" className={styles.btn_search}></button>
    </div>
  );
};
