const express = require('express');

const app = express();

// app.use((req, res) => {
//   console.log('URL : ', req.url);
//   console.log('Method : ', req.method);
//   console.log('Headers : ', req.headers);

//   res.statusCode = 200;
//   res.setHeader('Server', 'Node.js 12');
//   res.setHeader('Content-type', 'text/plain');
//   res.write('Hello');
//   res.end();
// });
const todos = [
  {
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true,
  },
  {
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.get('/api/todos/:todoId', (req, res) => {
  const todoId = Number(req.params.todoId);

  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.status(404);
    return res.json({msg: `Todo ${todoId} not found`});
  }

  res.json(todo);
});

// server.on('connection', (socket) => {
//   socket.pipe(process.stdout); // redirige la sortie de socket en entrée du terminal
// });

// server.on('request', (req, res) => {
//   console.log('URL : ', req.url);
//   console.log('Method : ', req.method);
//   console.log('Headers : ', req.headers);

//   res.statusCode = 200;
//   res.setHeader('Server', 'Node.js 12');
//   res.setHeader('Content-type', 'text/plain');
//   res.write('Hello');
//   res.end();
// });
// server.on('error', (err) => {
//   console.log(err);
// });

app.listen(3000, () => {
  console.log('Server started');
});
