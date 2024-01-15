import { createContext, useState } from "react";
import getListFromStorage from "../shared/helpers/getListFromStorage";
import { getRandomInt } from "../shared/utils";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  const [toDo, setToDo] = useState(getListFromStorage());

  const addTodo = (e) => {
    const newId = getRandomInt(10000);
    setToDo([...toDo, { id: newId, value: e }]);
  };
  //TODO сделать удаление
  return (
    <ToDoContext.Provider value={{ todoList: toDo, addTodo }}>
      {children}
    </ToDoContext.Provider>
  );
}
