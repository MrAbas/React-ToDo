import { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState([]);

  useEffect(() => {
    if (localStorage[key]) {
      setStoredValue(JSON.parse(localStorage[key]));
    }
  }, [key]);

  const setValue = (value) => {
    localStorage[key] = JSON.stringify(value);
  };

  return [storedValue, setValue];
};
