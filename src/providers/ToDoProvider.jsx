import { createContext } from "react";

export const ToDoContext = createContext();
export function ToDoProvider({ children }) {
  return <ToDoContext.Provider>{children}</ToDoContext.Provider>;
}
