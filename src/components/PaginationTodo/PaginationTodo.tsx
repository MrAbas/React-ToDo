import React, { useEffect, useState } from "react";
import { commentsAsyncSelector } from "../../store/selectors";
import { useAppSelector } from "../../hooks/hook";
import { memo } from "react";

interface paginationProps {
  countTodos: number;
  totalTodos: number;
}

export const PaginationTodo: React.FC<paginationProps> = memo(
  ({ countTodos, totalTodos }) => {
    const [pageNumbers, setPageNumbers] = useState([]);
    const commentsAsync = useAppSelector(commentsAsyncSelector);

    useEffect(() => {
      if (commentsAsync.length > 0) {
        let newPages = [];
        console.log(1);
        for (
          let i = 1;
          i <= Math.ceil(commentsAsync.length / countTodos);
          i++
        ) {
          newPages.push(i);
        }
        setPageNumbers(newPages);
      }
      console.log(pageNumbers);
    }, [commentsAsync]);
    //Todo вывести в redux номер pagination по  onclick
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a className="page-link" href="/#" aria-label="Previous">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);
