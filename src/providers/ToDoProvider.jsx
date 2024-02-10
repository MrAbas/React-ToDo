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

  const newId = getRandomInt();
  const addToDo = () => {
    const value = textInput.current.value;
    setToDoListToLocal([...toDo, { value, id: newId, checked: false }]);
    setToDo({ value, id: newId, checked: false });
  };

  const onDeleted = (id) => {
    const deletedNodes = toDo.filter((i) => i.id !== id);
    setToDoListToLocal(deletedNodes);
    setToDo(deletedNodes);
  };

  const changeToDoList = () => {};

  return (
    <ToDoContext.Provider
      value={{
        toDoList: toDo,
        addToDo,
        textInput,
        show,
        onModalShow,
        onDeleted,
        changeToDoList,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
