import React from "react";


function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  
  React.useEffect( () => {
    setTimeout(() => {
      try {
      const localStorageItem = localStorage.getItem(itemName);
    
      let parsedItem;
      
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }

      setLoading(false)
      
    } catch(error){
      setLoading(false)
      setError(true)
    }
    }, 2000);
  }, []);

   // este metodo es para guardar los nuevos todos actualizando los estados y el localStorage 
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
};

export { useLocalStorage };


// localStorage.removeItem('W_TODOS_V1');

// const defaultTodos = [
//   { text: 'Llevar la ropa para entrenar', completed: true},
//   { text: 'Tomar el Cuerso de Intro a React.js', completed: false},
//   { text: 'Estudiar React', completed: true},
//   { text: 'Pasar por la caja menor', completed: true},
//   { text: 'Ir a la reunión de IA', completed: false},
// ];
// localStorage.setItem('W_TODOS_V1', JSON.stringify(defaultTodos));