import { useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoContext } from "../../providers/ToDoProvider";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";
import { useDispatch } from "react-redux";

const cn = classNames.bind(styles);

export const ToDoItem = (props) => {
  const [theme] = useContext(ThemeContext);
  const { onDeleted, doneNote } = useContext(ToDoContext);

  const [editMode, setEditMode] = useState(false);
  const [textInput, setTextInput] = useState(props.value);
  const [localValue, setListToStorage] = useLocalStorage("toDoList");

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
          doneNote(props.id);
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
              //TODO повтор
              setListToStorage(
                localValue.map((toDo) => {
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
        <button
          className={styles.btn_change}
          onClick={() => {
            editToDoText();
            setListToStorage(
              localValue.map((toDo) => {
                if (toDo.id === props.id) {
                  toDo.value = textInput;
                }
                return toDo;
              })
            );
          }}
        ></button>
        <button
          className={styles.btn_deleted}
          onClick={() => onDeleted(props.id)}
        ></button>
      </div>
    </li>
  );
};
