import { createContext, useState } from "react";
import getListFromStorage from "../shared/helpers/getListFromStorage";
import { getRandomInt } from "../shared/utils";
import setListToStorage from "../shared/helpers/setListToStorage";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  const [toDo, setToDo] = useState(getListFromStorage());
  const newId = getRandomInt();
  const addToDo = (e) => {
    const newId = getRandomInt();
    setToDo([...toDo, { id: newId, value: e, checked: false }]);
  };
  const onDeleted = (id) => {
    const deletedNotes = toDo.filter((i) => {
      return i.id !== Number(id);
    });
    setToDo(deletedNotes);
    setListToStorage(deletedNotes);
  };
  const changeToDoList = (filteredArr) => {
    setToDo(filteredArr);
  };
  const doneNote = (id) => {
    const localToDo = getListFromStorage().map((toDo) => {
      if (toDo.id === id) {
        toDo.checked = !toDo.checked;
      }
      return toDo;
    });
    setListToStorage(localToDo);
  };
  return (
    <ToDoContext.Provider
      value={{ todoList: toDo, addToDo, onDeleted, changeToDoList, doneNote }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
