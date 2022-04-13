const itemName = 'iLink_task_pagination_index';

export const readIndex = (defaultValue = 0) => {
  const value = localStorage.getItem(itemName);
  return Number(value) ?? defaultValue;
}

export const saveIndex = (value) => localStorage.setItem(itemName, value);
