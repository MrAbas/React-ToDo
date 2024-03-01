import { useContext } from "react";
import { useAppSelector } from "../../hooks/hook";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoItem } from "../ToDoItem/TodoItem";
import styles from "./ToDoList.module.scss";
// import axios from "axios";
// import { fetchPokemonByName } from "../../store/actions";
// import { useDispatch } from "react-redux";

export const ToDoList: React.FC = () => {
  const theme = useContext(ThemeContext);

  const toDoList = useAppSelector((state) => state.todo.currentTodos);

  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      {toDoList?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};
