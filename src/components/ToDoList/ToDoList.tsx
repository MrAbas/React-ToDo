import { useEffect, useState } from "react";
import react from "react";
import { useAppSelector } from "../../hooks/hook";
import { ToDoItem } from "../ToDoItem/TodoItem";
import {
  commentsAsyncSelector,
  currentTodosSelector,
  paginationNumberSelector,
  todosAsyncSelector,
} from "../../store/selectors";
import { fetchTodo, fetchComment } from "../../store/actions";
import { useAppDispatch } from "../../store";
import { useThemeContext } from "../../hooks/ThemeContext";
import { PaginationTodo } from "../PaginationTodo/PaginationTodo";
import styles from "./ToDoList.module.scss";

export const ToDoList: React.FC = () => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchTodo());
    dispatch(fetchComment());
  }, []);

  const toDoList = useAppSelector(currentTodosSelector);
  // const todosAsync = useAppSelector(todosAsyncSelector);
  const commentsAsync = useAppSelector(commentsAsyncSelector);
  const [currentComments, setCurrentComments] = useState([]);
  //Pagination
  const countTodos = 15; //кол-во todo на странице
  const page = useAppSelector(paginationNumberSelector);

  useEffect(() => {
    const lastCountryIndex = page * countTodos;
    const firstCountryIndex = lastCountryIndex - countTodos;

    //вывести туду с 50 до 60
    if (commentsAsync.length > 0) {
      const currentPageNow = commentsAsync.slice(
        firstCountryIndex,
        lastCountryIndex
      );
      setCurrentComments(currentPageNow);
    }
  }, [commentsAsync, page]); //paginationIndex передать в зависимости

  return (
    <div>
      {currentComments.length > 0 && (
        <PaginationTodo
          countTodos={countTodos}
          totalTodos={commentsAsync.length}
        />
      )}

      {/*  <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a className="page-link" href="/#" aria-label="Previous">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
      <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
        {/* {toDoList?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))} */}
        {currentComments?.map((comment) => (
          <ToDoItem
            key={comment.id}
            id={comment.id}
            title={comment.name}
            completed={false}
          />
        ))}
      </ul>
    </div>
  );
};
