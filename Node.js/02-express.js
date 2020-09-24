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

const users = [
   {
     id: 1,
     username: 'romain',
     password: '123456'
   },
   {
    id: 2,
    username: 'eric',
    password: 'soleil'
  }
]

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

app.post('/api/todos', express.json(), (req, res) => {
  const todo = req.body;

  todo.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  todos.push(todo);

  res.status(201); // CREATED
  res.json(todo);
});

// Exercice 1
// Sur une requête GET /api/users
// Repondre en JSON la liste des users sans le password

// Exercice 2
// Sur une requête POST /api/users
// Repondre en JSON le user créé avec un id sans le password
// et le stocker dans le tableau users

// Exercice 3
// Sur une requête DELETE /api/todos/:todoId
// Supprimer la todo correspondante du tableau (relire la doc MDN sur les tableaux)
// Répondre la todo supprimée

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
