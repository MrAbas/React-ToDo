import { createContext, useState } from "react";
import getListFromStorage from "../shared/helpers/getListFromStorage";
import { getRandomInt } from "../shared/utils";
// import setListToStorage from "../shared/helpers/setListToStorage";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  const [toDo, setToDo] = useState(getListFromStorage());

  const addToDo = (e) => {
    const newId = getRandomInt();
    setToDo([...toDo, { id: newId, value: e }]);
  };
  const onDeleted = (id) => {
    // const deletedNotes = toDo.filter();
    console.log(toDo);
  };
  //TODO сделать удаление
  return (
    <ToDoContext.Provider value={{ todoList: toDo, addToDo, onDeleted }}>
      {children}
    </ToDoContext.Provider>
  );
}
