import { useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./search.module.scss";
import { ToDoContext } from "../../providers/ToDoProvider";
import getListFromStorage from "../../shared/helpers/getListFromStorage";

export const Search = () => {
  const { todoList, changeToDoList } = useContext(ToDoContext);
  const [theme] = useContext(ThemeContext);
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
        id="inputSearch"
        className={`${styles.input_search} ${styles[theme]}`}
        placeholder="Search note..."
        autoComplete="off"
      ></input>
      <button id="btnSearch" className={`${styles.btn_search}`}></button>
    </div>
  );
};
