import { useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useAppDispatch } from "../../store";
import { completedToDo, deletedToDo } from "../../store/toDoSlice";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";

const cn = classNames.bind(styles);

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

export const ToDoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const [complete, setComplete] = useState(completed);
  return (
    <li className={styles.note}>
      <input
        checked={complete}
        onChange={() => {
          setComplete(!complete);
          dispatch(completedToDo({ id }));
        }}
        className={`${styles.checkbox_note}`}
        type="checkbox"
      />
      <h2 className={cn("text_note", theme, { completed })}>{title}</h2>
      <div className={styles.btns_note}>
        <button className={styles.btn_change}></button>
        <button
          onClick={() => {
            dispatch(deletedToDo({ id }));
          }}
          className={styles.btn_deleted}
        ></button>
      </div>
    </li>
  );
};
