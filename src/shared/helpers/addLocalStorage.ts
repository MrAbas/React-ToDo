const addLocalStorage = (e: string, id: number) => {
  if (localStorage.toDoList) {
    let toDo = JSON.parse(localStorage.toDoList);
    toDo.push({ id, title: e, completed: false });
    localStorage.toDoList = JSON.stringify(toDo);
  } else {
    localStorage.toDoList = JSON.stringify([
      { id, title: e, completed: false },
    ]);
  }
};

export default addLocalStorage;
