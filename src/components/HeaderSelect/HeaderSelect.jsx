import { useDispatch, useSelector } from "react-redux";
import { setToDoCurrent } from "../../store/toDoSlice";
import styles from "./headerSelect.module.scss";

export const HeaderSelect = () => {
  const { toDoListInitial } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const filteredTodos = (e) => {
    switch (e.target.value) {
      case "Complete":
        const toDoComplete = toDoListInitial.filter((toDo) => toDo.checked);
        dispatch(setToDoCurrent(toDoComplete));
        break;
      case "Incomplete":
        const toDoIncomplete = toDoListInitial.filter((toDo) => !toDo.checked);
        dispatch(setToDoCurrent(toDoIncomplete));
        break;
      case "All":
        dispatch(setToDoCurrent(toDoListInitial));
        break;
      default:
        break;
    }
  };

  return (
    <select className={styles.drop_down} onChange={filteredTodos}>
      <option value="All">All</option>
      <option value="Complete">Complete</option>
      <option value="Incomplete">Incomplete</option>
    </select>
  );
};
