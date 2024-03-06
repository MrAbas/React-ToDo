import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hook";
import { ToDoItem } from "../ToDoItem/TodoItem";
import { currentTodosSelector } from "../../store/selectors";
import axios from "axios";
import { fetchPokemonByName } from "../../store/actions";
import { useAppDispatch } from "../../store";
import { useThemeContext } from "../../hooks/ThemeContext";
import styles from "./ToDoList.module.scss";

export const ToDoList: React.FC = () => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonByName("bulbasaur"));
    // GET request for remote image in node.js
    const getTodo = async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/todos");
      return res;
    };
    getTodo();
  }, []);

  const toDoList = useAppSelector(currentTodosSelector);

  return (
    <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
      {toDoList?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};
