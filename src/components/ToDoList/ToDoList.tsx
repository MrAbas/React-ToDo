import { useEffect, useState } from "react";
import react from "react";
import { useAppSelector } from "../../hooks/hook";
import { ToDoItem } from "../ToDoItem/TodoItem";
import {
  commentsAsyncSelector,
  currentTodosSelector,
  todosAsyncSelector,
} from "../../store/selectors";
import { fetchTodo, fetchComment } from "../../store/actions";
import { useAppDispatch } from "../../store";
import { useThemeContext } from "../../hooks/ThemeContext";
import styles from "./ToDoList.module.scss";
import { PaginationTodo } from "../PaginationTodo/PaginationTodo";

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
  const [currentPage, setCurrentPage] = useState(1); //текущая страница при открытии
  const countTodos = 10; //кол-во todo на странице

  const lastCountryIndex = currentPage * countTodos;
  const firstCountryIndex = lastCountryIndex - countTodos;
  const currentPageNow = commentsAsync.slice(
    firstCountryIndex,
    lastCountryIndex
  );
  useEffect(() => {
    let paginationIndex = 5; // взять из redux
    //вывести туду с 50 до 60
    if (commentsAsync.length > 0) {
      setCurrentPage();
    }
  }, [commentsAsync]); //paginationIndex передать в зависимости

  return (
    <div>
      {commentsAsync.length > 0 && (
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
        {commentsAsync?.map((comment) => (
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
