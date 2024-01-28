import { useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./ToDoItem.module.scss";
import getListFromStorage from "../../shared/helpers/getListFromStorage";
import setListToStorage from "../../shared/helpers/setListToStorage";

const cn = classNames.bind(styles);

export const ToDoItem = (props) => {
  const { onDeleted, doneNote } = useContext(ToDoContext);
  const [theme] = useContext(ThemeContext);
  const [checked, setChecked] = useState(props.checked);
  const [textInput, setTextInput] = useState(props.value);
  const [editMode, setEditMode] = useState(false);
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
          className={`${styles.input_change}`}
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setListToStorage(
                getListFromStorage().map((toDo) => {
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
        <button className={styles.btn_change} onClick={editToDoText}></button>
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
