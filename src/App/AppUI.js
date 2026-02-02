import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading/index.js';
import { TodosError } from '../TodosError/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';
import { TodoContext } from '../TodoContext/index.js';

function AppUI() {
  const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo
  } = React.useContext(TodoContext);
 return (
    <>
      <TodoCounter />
      <TodoSearch />       
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

          {searchedTodos.map( todo => (

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

export { AppUI }