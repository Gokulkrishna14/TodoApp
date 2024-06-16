import './App.css';
import TodoForm from './component/TodoForm/TodoForm';
import {TodoProvider} from "./context" 
import { useEffect, useState } from 'react';

function App() {

  const[todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos]);
  };

  const editTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map(prevTodo => (prevTodo.id === id) ? prevTodo : todo))
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo)=> todo.id !== id));
  }

  const completeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map(prevTodo => (prevTodo.id === id) ? {...prevTodo, completed: !prevTodo.completed}: prevTodo));
  } 

  useEffect(() => {
    const todos =  JSON.parse(localStorage.getItem("Todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{todos, addTodo, editTodo, deleteTodo, completeTodo}}>
      <div className='container'>
        <h1>Manage Your Todos</h1>
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
