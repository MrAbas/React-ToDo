import React, { useEffect, useState } from "react";
import { paginationNumberSelector } from "../../store/selectors";
import { useAppSelector } from "../../hooks/hook";
import { useAppDispatch } from "../../store";
import { onPaginationNumber } from "../../store/toDoSlice";

interface paginationProps {
  countTodos: number;
  allTodos: number;
}

export const PaginationTodo: React.FC<paginationProps> = ({
  countTodos,
  allTodos,
}) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const pageNow = useAppSelector(paginationNumberSelector);

  useEffect(() => {
    if (allTodos > 0) {
      let newPages = [];
      for (let i = 1; i <= Math.ceil(allTodos / countTodos); i++) {
        newPages.push(i);
        //TODO slice pagination
        // console.log(newPages.slice(i, i + 3));
        // console.log(newPages);
      }
      /* if (newPages.length > 5) {
        console.log(newPages.slice(0, 5));
        setPageNumbers(newPages);
      } */
      setPageNumbers(newPages);
    }
  }, [allTodos, countTodos]);

  const dispatch = useAppDispatch();
  const changePage = (e: number) => {
    dispatch(onPaginationNumber(e));
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            className={`page-item ${pageNow === number ? "active" : ""}`}
            style={{ cursor: "pointer" }}
            key={number}
          >
            <span
              className="page-link"
              aria-label="Previous"
              onClick={() => changePage(number)}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
