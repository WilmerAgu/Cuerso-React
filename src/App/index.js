import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';
import { AppUI } from './AppUI.js';

// const defaultTodos = [
//   { text: 'Llevar la ropa para entrenar', completed: true},
//   { text: 'Tomar el Cuerso de Intro a React.js', completed: false},
//   { text: 'Estudiar React', completed: true},
//   { text: 'Pasar por la caja menor', completed: true},
//   { text: 'Ir a la reunión de IA', completed: false},
// ];
// localStorage.setItem('W_TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('W_TODOS_V1');


function App() {
 
  const [todos, saveTodos] = useLocalStorage('W_TODOS_V1', []);
  const [searchValue, setSearchValue] =  React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const serchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos [todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <AppUI
      completeTodos={completeTodo} 
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      serchedTodos={serchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}  
    /> 
  )
}



export default App;


