import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./search.module.scss";

export const Search = () => {
  const [theme] = useContext(ThemeContext);
  // const [btn_search] = useContext(ThemeContext);
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        id="inputSearch"
        className={`${styles.input_search} ${styles[theme]}`}
        placeholder="Search note..."
        autoComplete="off"
      ></input>
      <button id="btnSearch" className={`${styles.btn_search}`}></button>
    </div>
  );
};
