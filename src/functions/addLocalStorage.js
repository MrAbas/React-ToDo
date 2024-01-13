// import { inputValue } from "./inputValue";
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const newId = getRandomInt(10000);

const addLocalStorage = (e) => {
  if (localStorage.toDoList) {
    let toDo = JSON.parse(localStorage.toDoList);
    toDo.push({ id: newId, value: e });
    localStorage.toDoList = JSON.stringify(toDo);
  } else {
    localStorage.toDoList = JSON.stringify([{ id: newId, value: e }]);
  }
};

export default addLocalStorage;
