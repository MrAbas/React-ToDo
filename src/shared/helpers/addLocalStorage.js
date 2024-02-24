const addLocalStorage = (e, id) => {
  if (localStorage.toDoList) {
    let toDo = JSON.parse(localStorage.toDoList);
    toDo.push({ id, value: e, checked: false });
    localStorage.toDoList = JSON.stringify(toDo);
  } else {
    localStorage.toDoList = JSON.stringify([{ id, value: e, checked: false }]);
  }
};

export default addLocalStorage;
