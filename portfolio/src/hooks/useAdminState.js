import { useState, useEffect } from "react";

const useAdminState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("⚠️ Грешка при четене от localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(state));
      }
    } catch (error) {
      console.error("⚠️ Грешка при запис в localStorage:", error);
    }
  }, [key, state]);

  return [state, setState];
};

export default useAdminState;
