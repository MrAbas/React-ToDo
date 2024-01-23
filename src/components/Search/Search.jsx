import { useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoContext } from "../../providers/ToDoProvider";
import getListFromStorage from "../../shared/helpers/getListFromStorage";
import styles from "./search.module.scss";

export const Search = () => {
  const [theme] = useContext(ThemeContext);
  // eslint-disable-next-line no-unused-vars
  const { toDo, changeToDoList } = useContext(ToDoContext);
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    const toDoLocal = getListFromStorage();
    setInputValue(e.target.value);
    if (e.target.value === "") {
      changeToDoList(toDoLocal);
    } else {
      const filteredToDoList = toDoLocal.filter((toDo) => {
        return toDo.value.includes(e.target.value);
      });
      changeToDoList(filteredToDoList);
    }
  };
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
        id="btnSearch"
        className={`${styles.btn_search} ${styles[`btn_search--${theme}`]}`}
      ></button>
    </div>
  );
};
