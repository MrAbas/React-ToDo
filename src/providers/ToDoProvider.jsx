import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getRandomInt } from "../shared/utils";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  const [localToDo, setToDoListToLocal] = useLocalStorage("toDoList");
  const [toDo, setToDo] = useState(localToDo);
  const addToDo = (e) => {
    const value = e.current.value;
    const newId = getRandomInt();
    setToDo([...toDo, { value, id: newId, checked: false }]);
    setToDoListToLocal([...toDo, { value, id: newId, checked: false }]);
  };

  const onDeleted = (id) => {
    const deletedNotes = toDo.filter((i) => i.id !== id);
    setToDoListToLocal(deletedNotes);
    setToDo(deletedNotes);
  };

  return (
    <ToDoContext.Provider value={{ toDoList: toDo, addToDo, onDeleted }}>
      {children}
    </ToDoContext.Provider>
  );
}
