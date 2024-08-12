import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo}) => {
  return (
    <ul>
      {todos.length === 0 ? <p>No to-dos available</p> : todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
                  />
      ))}
    </ul>
  );
};

export default TodoList;

