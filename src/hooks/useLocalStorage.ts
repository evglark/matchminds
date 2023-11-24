import { Dispatch, SetStateAction, useState } from 'react';

// import handleError from '@/utils/handleError';

function useLocalStorage<T>(
  key: string,
  initialState: T | (() => T),
  asString?: boolean,
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return item ? (asString ? item : JSON.parse(item)) : initialState;
      }
      return initialState;
    } catch (error) {
      //   handleError(error);
      console.log(error);

      return initialState;
    }
  });

  const setValue = (value: T | ((prevState: T) => T)): void => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        const valueToStore =
          value instanceof Function
            ? value(item ? JSON.parse(item) : initialState)
            : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(
          key,
          asString ? (valueToStore as unknown as string) : JSON.stringify(valueToStore),
        );
      }
    } catch (error) {
      //   handleError(error);
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
