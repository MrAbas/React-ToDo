const setListToStorage = (newArr: {}[]) => {
  localStorage.toDoList = JSON.stringify(newArr);
};

export default setListToStorage;
