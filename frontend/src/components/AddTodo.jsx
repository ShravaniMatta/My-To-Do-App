import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      try {
        const response = await axios.post('http://localhost:5000/api/todos', { text, completed: false, dueDate });
        addTodo(response.data);
        setText('');
        setDueDate('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
