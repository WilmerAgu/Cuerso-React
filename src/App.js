import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

// const defaultTodos = [
//   { text: 'Llevar la ropa para entrenar', completed: true},
//   { text: 'Tomar el Cuerso de Intro a React.js', completed: false},
//   { text: 'Estudiar React', completed: true},
//   { text: 'Pasar por la caja menor', completed: true},
//   { text: 'Ir a la reunión de IA', completed: false},
// ];
// localStorage.setItem('W_TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('W_TODOS_V1');


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


function App() {
 
  const [todos, saveTodos] = useLocalStorage('W_TODOS_V1', []);
  const [searchValue, setSearchValue] =  React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // const totalTodos = todos.filter(todo  => todo.text).length;

  const serchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  );

  // este metodo es para guardar los nuevos todos actualizando los estados y el localStorage 
  const saveItem = (newTodos) => {
    localStorage.setItem('W_TODOS_V1', JSON.stringify(newTodos));

    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos [todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}

      />
      <TodoList>
        {serchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          /> 
        ))}
      </TodoList> 
      <CreateTodoButton />
   </>
  );
}



export default App;


