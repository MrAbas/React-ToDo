import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./search.module.scss";

export const Search = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={`${styles.input_search} ${styles[`input_search--${theme}`]}`}
        placeholder="Search note..."
        autoComplete="off"
      ></input>
      <button
        className={`${styles.btn_search} ${styles[`btn_search--${theme}`]}`}
      ></button>
    </div>
  );
};
