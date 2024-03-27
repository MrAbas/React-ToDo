import { useAppSelector } from "../../hooks/hook";
import { ToDoItem } from "../ToDoItem/TodoItem";
import { currentTodosSelector } from "../../store/selectors";
import { useThemeContext } from "../../hooks/ThemeContext";
import { AddToDo } from "../AddToDo/AddToDo";
import { ModalToDo } from "../Modal/ModalToDo";
import styles from "./ToDoList.module.scss";
import { Header } from "../Header/Header";

export const ToDoList: React.FC = () => {
  const { theme } = useThemeContext();

  const toDoList = useAppSelector(currentTodosSelector);

  return (
    <div>
      <Header />
      <ul className={`${styles.list} ${styles[`list--${theme}`]}`}>
        {toDoList?.map((toDo) => (
          <ToDoItem key={toDo.id} {...toDo} />
        ))}
      </ul>
      <AddToDo />
      <ModalToDo />
    </div>
  );
};
