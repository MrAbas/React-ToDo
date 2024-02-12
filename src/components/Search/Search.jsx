import { useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./search.module.scss";

export const Search = () => {
  const [theme] = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState("");

  const [localValue, setListToStorage] = useLocalStorage("toDoList");

  const onInputChange = (e) => {};

  return (
    <div className={styles.wrapper}>
      <input
        value={inputValue}
        onChange={onInputChange}
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
