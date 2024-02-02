const setListToStorage = (newArr) => {
  localStorage.toDoList = JSON.stringify(newArr);
  console.log(1);
};

export default setListToStorage;
