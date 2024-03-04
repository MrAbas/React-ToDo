import { useState } from "react";
import { useAppDispatch } from "../../store";
import { setToDoCurrent } from "../../store/toDoSlice";
// import { ThemeContext } from "../../providers/ThemeProvider";
import { useAppSelector } from "../../hooks/hook";
import styles from "./search.module.scss";
import { initialTodosSelector } from "../../store/selectors";

export const Search = () => {
  // const [theme] = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const initialTodos = useAppSelector(initialTodosSelector);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      dispatch(setToDoCurrent(initialTodos));
    } else {
      const filteredToDoList = initialTodos.filter((toDo) =>
        toDo.title.includes(e.target.value)
      );
      dispatch(setToDoCurrent(filteredToDoList));
    }
  };
  return (
    <div className={styles.wrapper}>
      <input
        // className={`${styles.input_search} ${styles[`input_search--${theme}`]}`}
        className={`${styles.input_search} `}
        type="text"
        placeholder="Search note..."
        autoComplete="off"
        value={inputValue}
        onChange={onInputChange}
      ></input>
      <button
        // className={`${styles.btn_search} ${styles[`btn_search--${theme}`]}`}
        className={`${styles.btn_search} `}
      ></button>
    </div>
  );
};
