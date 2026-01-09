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
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
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


