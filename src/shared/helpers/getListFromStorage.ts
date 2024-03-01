const getListFromStorage = () => {
  if (localStorage.toDoList) {
    return JSON.parse(localStorage.toDoList);
  }
  return [];
};
export default getListFromStorage;
