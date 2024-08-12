import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate);

  const handleComplete = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(todo.id, { ...todo, text: editText, dueDate: editDueDate });
    }
    setIsEditing(!isEditing);
  };

  const isOverdue = () => {
    return todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
          />
        </>
      ) : (
        <>
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </span>
          {todo.dueDate && (
            <>
              <span className="due-date">
                Due: {new Date(todo.dueDate).toLocaleDateString()}
              </span>
              {isOverdue() && (
                <span className="overdue">
                  Overdue
                </span>
              )}
            </>
          )}
          {todo.completed && (
            <span className="completed-badge">Completed</span>
          )}
        </>
      )}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleComplete}
      />
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default TodoItem;

