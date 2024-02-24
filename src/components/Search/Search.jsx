import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../providers/ThemeProvider";
import { setToDoCurrent } from "../../store/toDoSlice";
import styles from "./search.module.scss";

export const Search = () => {
  const [theme] = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState("");
  const { toDoListInitial } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      dispatch(setToDoCurrent(toDoListInitial));
    } else {
      const filteredToDoList = toDoListInitial.filter((toDo) => {
        return toDo.value.includes(e.target.value);
      });
      dispatch(setToDoCurrent(filteredToDoList));
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
