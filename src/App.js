import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: 'Llevar la ropa para entrenar', completed: true},
  { text: 'Tomar el Cuerso de Intro a React.js', completed: false},
  { text: 'Estudiar React', completed: true},
  { text: 'Pasar por la caja menor', completed: true},
  { text: 'Ir a la reunión de IA', completed: false},

];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] =  React.useState('');
  console.log('los usuarios buscan: ' + searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // const totalTodos = todos.filter(todo  => todo.text).length;

  const serchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  )

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
          completed={todo.completed} /> 
        ))}
      </TodoList> 
      <CreateTodoButton />

    </>
  );
}



export default App;


