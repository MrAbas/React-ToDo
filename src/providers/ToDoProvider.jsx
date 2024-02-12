import { createContext, useRef, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getRandomInt } from "../shared/utils";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  const [show, setShow] = useState(false);
  const onModalShow = () => {
    setShow(!show);
  };
  const textInput = useRef();

  const [localToDo, setToDoListToLocal] = useLocalStorage("toDoList");
  const [toDo, setToDo] = useState(localToDo);

  const onDeleted = (id) => {
    const deletedNodes = toDo.filter((i) => i.id !== id);
    setToDoListToLocal(deletedNodes);
    setToDo(deletedNodes);
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

  return (
    <ToDoContext.Provider
      value={{
        toDoList: toDo,
        textInput,
        show,
        onModalShow,
        onDeleted,
        doneNote,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
