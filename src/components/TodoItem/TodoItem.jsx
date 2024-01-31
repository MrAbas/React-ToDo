import { useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";

const cn = classNames.bind(styles);

export const ToDoItem = (props) => {
  const { onDeleted, doneNote } = useContext(ToDoContext);
  const [theme] = useContext(ThemeContext);
  const [checked, setChecked] = useState(props.checked);

  const [editMode, setEditMode] = useState(false);
  const [textInput, setTextInput] = useState(props.value);
  const [storedValue, setValue] = useLocalStorage("toDoList");

  const editToDoText = () => {
    setEditMode(!editMode);
  };
  return (
    <li className={styles.note}>
      <input
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          doneNote(props.id);
        }}
        className={`${styles.checkbox_note} `}
        type="checkbox"
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
              setValue(
                storedValue().map((toDo) => {
                  if (toDo.id === props.id) {
                    toDo.value = textInput;
                  }
                  return toDo;
                })
              );
              setEditMode(!editMode);
            }
          }}
        />
      ) : (
        <h2 className={cn("text_note", theme, { checked })}>{textInput}</h2>
      )}
      <div className={styles.btns_note}>
        <button onClick={editToDoText} className={styles.btn_change}></button>
        <button
          onClick={() => {
            onDeleted(props.id);
          }}
          className={styles.btn_deleted}
        ></button>
      </div>
    </li>
  );
};
