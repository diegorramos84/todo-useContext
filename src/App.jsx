import React, {useState, useEffect, createContext, useContext} from 'react';
import './App.css';


import { TodoForm, TodoList } from './components';

export const Context = createContext('')

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [status, todos])

  function filterHandler() {
    if(status === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    } else if (status === 'uncompleted') {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
    } else {
      setFilteredTodos(todos);
    }
  }

  return (
    <div>
      <header>Sarah's Todo List</header>
      <Context.Provider value={ { todos, filteredTodos} }>
        <TodoForm inputText={inputText} setInputText={setInputText} setTodos={setTodos} setStatus={setStatus} />
        <TodoList setTodos={setTodos} />
      </Context.Provider>
    </div>
  );
}

export default App;
