import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hook";
import { ToDoItem } from "../ToDoItem/TodoItem";
import {
  commentsAsyncSelector,
  errorSelector,
  paginationNumberSelector,
  statusSelector,
} from "../../store/selectors";
import { fetchComment } from "../../store/actions";
import { useAppDispatch } from "../../store";
import { useThemeContext } from "../../hooks/ThemeContext";
import { PaginationTodo } from "../PaginationTodo/PaginationTodo";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import styles from "../ToDoList/ToDoList.module.scss";

export const CommentsList: React.FC = () => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComment());
  }, []);

  const commentsAsync = useAppSelector(commentsAsyncSelector);
  const [currentComments, setCurrentComments] = useState([]);
  //Pagination
  const countСomments = 15; //кол-во todo на странице
  const page = useAppSelector(paginationNumberSelector);

  useEffect(() => {
    const lastCountryIndex = page * countСomments;
    const firstCountryIndex = lastCountryIndex - countСomments;

    //вывести туду с 50 до 60
    if (commentsAsync.length > 0) {
      const currentPageNow = commentsAsync.slice(
        firstCountryIndex,
        lastCountryIndex
      );
      setCurrentComments(currentPageNow);
    }
  }, [commentsAsync, page]); //paginationIndex передать в зависимости

  const status = useAppSelector(statusSelector);
  const error = useAppSelector(errorSelector);

  useEffect(() => {
    if (status === "error") {
      toast.error(error, { position: "top-left" });
    }
  }, [status]);

  return (
    <div>
      {currentComments.length > 0 && (
        <PaginationTodo
          countTodos={countСomments}
          totalTodos={commentsAsync.length}
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
