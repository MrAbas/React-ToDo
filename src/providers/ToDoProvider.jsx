import { createContext, useRef, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  const [show, setShow] = useState(false);
  const onModalShow = () => {
    setShow(!show);
  };
  const textInput = useRef();

  const [localToDo, setToDoListToLocal] = useLocalStorage("toDoList");
  const [toDo, setToDo] = useState(localToDo);

  const removeFromLocalStorage = (id) => {
    const deletedNodes = toDo.filter((i) => i.id !== id);
    setToDoListToLocal(deletedNodes);
  };

  const doneNote = (id) => {
    localToDo.map((toDo) => {
      if (toDo.id === id) {
        toDo.checked = !toDo.checked;
      }
      return toDo;
    });
    setToDoListToLocal(localToDo);
    setToDo(localToDo);
  };

  const changeToDoList = (filteredArr) => {
    setToDo(filteredArr);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDoList: toDo,
        textInput,
        show,
        onModalShow,
        removeFromLocalStorage,
        doneNote,
        changeToDoList,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
