import { useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoContext } from "../../providers/ToDoProvider";
import getListFromStorage from "../../shared/helpers/getListFromStorage";
import styles from "./search.module.scss";

export const Search = () => {
  const [theme] = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState("");
  // const [localValue, setListToStorage] = useLocalStorage("toDoList"); спросить про getListFrom
  const { changeToDoList } = useContext(ToDoContext);

  const onInputChange = (e) => {
    // TODO
    setInputValue(e.target.value);
    const toDoLocal = getListFromStorage();
    if (e.target.value === "") {
      changeToDoList(toDoLocal);
    } else {
      const filteredToDoList = toDoLocal.filter((toDo) => {
        return toDo.value.includes(e.target.value);
      });
      changeToDoList(filteredToDoList);
      console.log(filteredToDoList);
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
        className={`${styles.btn_search} ${styles[`btn_search--${theme}`]}`}
      ></button>
    </div>
  );
};
