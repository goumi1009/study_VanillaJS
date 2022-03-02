const storage = window.localStorage;

export const setLocalStorage = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocalStorage = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  } catch (e) {
    console.log(e.message);

    return defaultValue;
  }
  return storedValue;
};
