import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue === null) {
        return initialValue;
      }

      return JSON.parse(storedValue);
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

function saveValue(newValue) {
  try {
    setValue((prev) => {
      const valueToStore =
        typeof newValue === "function"
          ? newValue(prev)
          : newValue;

      localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );

      return valueToStore;
    });
  } catch (error) {
    console.error(error);
  }
}

  return [value, saveValue];
}