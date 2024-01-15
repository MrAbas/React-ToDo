import { getRandomInt } from "../utils";

// TODO сменить название на addToDoListLocalStorage
const addLocalStorage = (e) => {
  const newId = getRandomInt(10000);
  if (localStorage.toDoList) {
    let toDo = JSON.parse(localStorage.toDoList);
    toDo.push({ id: newId, value: e });
    localStorage.toDoList = JSON.stringify(toDo);
  } else {
    localStorage.toDoList = JSON.stringify([{ id: newId, value: e }]);
  }
};

export default addLocalStorage;
