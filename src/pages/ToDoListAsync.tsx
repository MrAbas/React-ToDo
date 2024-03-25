import { useEffect, useState } from "react";

import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useThemeContext } from "../hooks/ThemeContext";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { fetchToDo } from "../store/toDoSlice";
import {
  errorSelector,
  paginationNumberSelector,
  statusSelector,
  todosAsyncSelector,
} from "../store/selectors";
import { PaginationTodo } from "../components/PaginationTodo/PaginationTodo";
import { ToDoItem } from "../components/ToDoItem/TodoItem";
import styles from "../components/ToDoList/ToDoList.module.scss";

export const ToDoListAsync: React.FC = () => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchToDo());
  }, [dispatch]);

  const todosAsync = useAppSelector(todosAsyncSelector);
  const [currentTodos, setCurrentTodos] = useState([]);
  //Pagination
  const countTodos = 15; //кол-во todo на странице
  const page = useAppSelector(paginationNumberSelector);

  useEffect(() => {
    const lastCountryIndex = page * countTodos;
    const firstCountryIndex = lastCountryIndex - countTodos;

    //вывести туду с 50 до 60
    if (todosAsync.length > 0) {
      const currentPageNow = todosAsync.slice(
        firstCountryIndex,
        lastCountryIndex
      );
      setCurrentTodos(currentPageNow);
    }
  }, [todosAsync, page]); //paginationIndex передать в зависимости

  const status: "error" | "resolved" | "loading" =
    useAppSelector(statusSelector);
  const error = useAppSelector(errorSelector);

  useEffect(() => {
    if (status === "error") {
      toast.error(error, { position: "top-left" });
    }
  }, [error, status]);

  return (
    <div>
      {currentTodos.length > 0 && (
        <PaginationTodo
          countTodos={countTodos}
          totalTodos={todosAsync.length}
        />
      )}

      {status === "loading" && (
        <div>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
        </div>
      )}
      {status === "error" && (
        <div>
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
        {currentTodos?.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};
