import { useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import getListFromStorage from "../../shared/helpers/getListFromStorage";
import styles from "./headerSelect.module.scss";

export const HeaderSelect = () => {
  const [filter, setFilter] = useState("all");
  // eslint-disable-next-line no-unused-vars
  const { toDo, changeToDoList } = useContext(ToDoContext);

  const filteredTodos = (e) => {
    const toDoLocal = getListFromStorage();
    setFilter(e.target.value);
    if (filter === "all") {
      changeToDoList(toDoLocal);
    } else if (filter === "Complete") {
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
