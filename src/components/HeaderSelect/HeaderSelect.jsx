import { useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import getListFromStorage from "../../shared/helpers/getListFromStorage";
import styles from "./headerSelect.module.scss";

export const HeaderSelect = () => {
  const [filter, setFilter] = useState("all");

  const { changeToDoList } = useContext(ToDoContext);

  const filteredTodos = (e) => {
    let toDoLocal = getListFromStorage();
    let select = e.target.value;
    setFilter(e.target.value);
    if (select === "all") {
      changeToDoList(toDoLocal);
    } else if (select === "Complete") {
      toDoLocal = toDoLocal.filter((toDo) => toDo.checked);
      changeToDoList(toDoLocal);
    } else if (select === "Incomplete") {
      toDoLocal = toDoLocal.filter((toDo) => !toDo.checked);
      changeToDoList(toDoLocal);
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
