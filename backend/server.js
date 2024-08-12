const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let todos = [
  // Example data
  { id: 1, text: 'Sample To-Do', completed: false, dueDate: '' },
];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = { ...req.body, id: todos.length + 1 };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos = todos.map(todo => (todo.id == id ? updatedTodo : todo));
  res.json(updatedTodo);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
