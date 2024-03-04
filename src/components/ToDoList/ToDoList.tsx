import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hook";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoItem } from "../ToDoItem/TodoItem";
import { currentTodosSelector } from "../../store/selectors";
import axios from "axios";
import { fetchPokemonByName } from "../../store/actions";
import { useAppDispatch } from "../../store";
import styles from "./ToDoList.module.scss";

export const ToDoList: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [toDo, setToDo] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonByName("bulbasaur"));
    // GET request for remote image in node.js
    const getTodo = async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/todos");
      setToDo(res.data);
      return res;
    };
    getTodo();
  }, []);

  const toDoList = useAppSelector(currentTodosSelector);

  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      {toDo?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};
