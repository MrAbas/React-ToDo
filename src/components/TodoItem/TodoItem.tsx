import { useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useAppDispatch } from "../../store";
import {
  changeTextToDo,
  completedToDo,
  deletedToDo,
} from "../../store/toDoSlice";
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
  const [editMode, setEditMode] = useState<boolean>(false);
  const [textInput, setTextInput] = useState(title);

  const editToDoText = () => {
    setEditMode(!editMode);
  };

  return (
    <li className={styles.note}>
      <input
        className={`${styles.checkbox_note}`}
        type="checkbox"
        checked={complete}
        onChange={() => {
          setComplete(!complete);
          dispatch(completedToDo({ id }));
        }}
      />
      {editMode ? (
        <input
          className={cn("input_change")}
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              dispatch(changeTextToDo({ id, title: textInput }));
              editToDoText();
            }
          }}
        />
      ) : (
        <h2 className={cn("text_note", theme, { completed })}>{textInput}</h2>
      )}
      <div className={styles.btns_note}>
        <button className={styles.btn_change} onClick={editToDoText}></button>
        <button
          className={styles.btn_deleted}
          onClick={() => {
            dispatch(deletedToDo({ id }));
          }}
        ></button>
      </div>
    </li>
  );
};
