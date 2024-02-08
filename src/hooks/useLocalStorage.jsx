import { useState } from "react";

export const useLocalStorage = (key) => {
  const getListFromStorage = () => {
    if (localStorage[key]) {
      return JSON.parse(localStorage[key]);
    }
    return [];
  };

  const [localValue, setLocalValue] = useState(getListFromStorage());
  const setListToStorage = (newArr) => {
    setLocalValue(newArr);
    localStorage[key] = JSON.stringify(newArr);
  };
  return [localValue, setListToStorage];
};
