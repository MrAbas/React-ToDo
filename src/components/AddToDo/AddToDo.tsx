import { useAppSelector } from "../../hooks/hook";
import { useAppDispatch } from "../../store";
import { modalShowSelector } from "../../store/selectors";
import { onModalShow } from "../../store/toDoSlice";
import styles from "./AddToDo.module.scss";

export const AddToDo = () => {
  const dispatch = useAppDispatch();
  const modalShow = useAppSelector(modalShowSelector);

  return (
    <button
      onClick={() => {
        dispatch(onModalShow(modalShow));
      }}
      className={styles.add_btn}
    ></button>
  );
};
