import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: 'Llevar la ropa para entrenar', completed: true},
  { text: 'Tomar el Cuerso de Intro a React.js', completed: false},
  { text: 'Precticar Guitarra', completed: true},
  { text: 'Estudiar React', completed: false},
  { text: 'Pasar por la caja menor', completed: false},
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] =  React.useState('');
  console.log('los usuarios buscan: ' + searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  // const totalTodos = todos.length


  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={25}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {defaultTodos.map( todo => (
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


