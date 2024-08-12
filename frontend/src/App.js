import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }
    fetchTodos();
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="app-container">
      <h1>Simple To-Do Application</h1>
      <AddTodo addTodo={addTodo} />
      {todos.length === 0 ? (
        <div className="empty-state">No to-dos available</div>
      ) : (
        <TodoList todos={todos} updateTodo={updateTodo}/>
      )}
    </div>
  );
};

export default App;


