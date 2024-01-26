import { getRandomInt } from "../utils";

const addToDoListLocalStorage = (e) => {
  const newId = getRandomInt(10000);
  if (localStorage.toDoList) {
    let toDo = JSON.parse(localStorage.toDoList);
    toDo.push({ id: newId, value: e, checked: false });
    localStorage.toDoList = JSON.stringify(toDo);
  } else {
    localStorage.toDoList = JSON.stringify([
      { id: newId, value: e, checked: false },
    ]);
  }
};

export default addToDoListLocalStorage;
