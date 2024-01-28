import { useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
// import getListFromStorage from "../../shared/helpers/getListFromStorage";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./headerSelect.module.scss";

export const HeaderSelect = () => {
  const [filter, setFilter] = useState("all");
  const [storedValue] = useLocalStorage("toDoList");
  const { changeToDoList } = useContext(ToDoContext);

  const filteredTodos = (e) => {
    let toDoLocal = storedValue;
    setFilter(e.target.value);
    switch (e.target.value) {
      case "Complete":
        toDoLocal = toDoLocal.filter((toDo) => toDo.checked);
        changeToDoList(toDoLocal);
        break;
      case "Incomplete":
        toDoLocal = toDoLocal.filter((toDo) => !toDo.checked);
        changeToDoList(toDoLocal);
        break;
      default:
        changeToDoList(toDoLocal);
        break;
    }
  };

  return (
    <select
      onChange={filteredTodos}
      value={filter}
      className={styles.drop_down}
    >
      <option value="all">all</option>
      <option value="Complete">Complete</option>
      <option value="Incomplete">Incomplete</option>
    </select>
  );
};
