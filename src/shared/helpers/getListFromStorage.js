const getListFromStorage = () => {
  if (localStorage.toDoList) {
    return (localStorage.toDoList = JSON.parse());
  }
  return [];
};
export default getListFromStorage;
