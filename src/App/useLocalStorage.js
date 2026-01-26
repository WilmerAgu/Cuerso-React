import React from "react";


function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

   // este metodo es para guardar los nuevos todos actualizando los estados y el localStorage 
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};

export { useLocalStorage };