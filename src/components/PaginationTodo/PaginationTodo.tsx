import React, { useEffect, useState } from "react";
import { commentsAsyncSelector } from "../../store/selectors";
import { useAppSelector } from "../../hooks/hook";
import { memo } from "react";
import { useAppDispatch } from "../../store";
import { onPaginationNumber } from "../../store/toDoSlice";

interface paginationProps {
  countTodos: number;
  totalTodos: number;
}

export const PaginationTodo: React.FC<paginationProps> = memo(
  ({ countTodos }) => {
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);
    const commentsAsync = useAppSelector(commentsAsyncSelector);

    useEffect(() => {
      if (commentsAsync.length > 0) {
        let newPages = [];
        for (
          let i = 1;
          i <= Math.ceil(commentsAsync.length / countTodos);
          i++
        ) {
          newPages.push(i);
        }
        setPageNumbers(newPages);
      }
    }, [commentsAsync]);
    //Todo вывести в redux номер pagination по  onclick
    const dispatch = useAppDispatch();
    const changePage = (e: number) => {
      dispatch(onPaginationNumber(e));
    };
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a
                className="page-link"
                href="/#"
                aria-label="Previous"
                onClick={() => changePage(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);
