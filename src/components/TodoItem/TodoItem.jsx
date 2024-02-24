import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { onDeleted, doneNote, changeTextToDo } from "../../store/toDoSlice";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ThemeContext } from "../../providers/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";

const cn = classNames.bind(styles);

export const ToDoItem = (props) => {
  const [theme] = useContext(ThemeContext);

  const [editMode, setEditMode] = useState(false);
  const [textInput, setTextInput] = useState(props.value);

  const editToDoText = () => {
    setEditMode(!editMode);
  };

  const [checked, setChecked] = useState(props.checked);

  const dispatch = useDispatch();

  return (
    <li className={styles.note}>
      <input
        className={`${styles.checkbox_note}`}
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          dispatch(doneNote(props.id));
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
              dispatch(changeTextToDo({ id: props.id, text: textInput }));
              setEditMode(!editMode);
            }
          }}
        />
      ) : (
        <h2 className={cn("text_note", theme, { checked })}>{textInput}</h2>
      )}
      <div className={styles.btns_note}>
        <button
          className={styles.btn_change}
          onClick={() => {
            editToDoText();
          }}
        ></button>
        <button
          className={styles.btn_deleted}
          onClick={() => {
            dispatch(onDeleted(props.id));
          }}
        ></button>
      </div>
    </li>
  );
};
