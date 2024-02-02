import { createContext, useState } from "react";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  // const [toDo, setToDo] = useState(getListFromStorage());

  const addToDo = (e) => {};
  return (
    <ToDoContext.Provider value={{ toDoList: addToDo }}>
      {children}
    </ToDoContext.Provider>
  );
}
