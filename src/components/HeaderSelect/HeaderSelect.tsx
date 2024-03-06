import { ChangeEvent } from "react";
import { useAppSelector } from "../../hooks/hook";
import { useAppDispatch } from "../../store";
import { setToDoCurrent } from "../../store/toDoSlice";
import styles from "./headerSelect.module.scss";

export const HeaderSelect = () => {
  const { initialTodos } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const filteredTodos = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "Complete":
        const toDoComplete = initialTodos.filter((toDo) => toDo.completed);
        dispatch(setToDoCurrent(toDoComplete));
        break;
      case "Incomplete":
        const toDoIncomplete = initialTodos.filter((toDo) => !toDo.completed);
        dispatch(setToDoCurrent(toDoIncomplete));
        break;
      default:
        dispatch(setToDoCurrent(initialTodos));
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
