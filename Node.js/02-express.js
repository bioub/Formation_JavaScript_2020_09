const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const SECRET = 'c"hg"-C5435GV5363CFvgdydf4tf6v5r(';

const app = express();

app.use(cors());

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
    password: '123456',
  },
  {
    id: 2,
    username: 'eric',
    password: 'soleil',
  },
];

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function authenticate(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401);
    return res.json({ msg: 'Unauthorized' });
  }

  const [, token] = req.headers.authorization.split(' ');

  try {
    /* eslint-disable-next-line no-unused-vars */
    const payload = jwt.verify(token, SECRET);

    // console.log(((Date.now() / 1000) - payload.iat) / (3600));


    next();
  } catch {
    res.status(401);
    return res.json({ msg: 'Unauthorized' });
  }
}

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.get('/api/todos/:todoId', (req, res) => {
  const todoId = Number(req.params.todoId);

  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.status(404);
    return res.json({ msg: `Todo ${todoId} not found` });
  }

  res.json(todo);
});

app.post('/api/todos', /*authenticate,*/ express.json(), (req, res) => {
  const todo = req.body;

  todo.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  todos.push(todo);

  res.status(201); // CREATED
  res.json(todo);
});

/* eslint-disable-next-line no-unused-vars */
function omit(obj, key) {
  const { [key]: _, ...rest } = obj;
  return rest;
}

// Exercice 1
// Sur une requête GET /api/users
// Repondre en JSON la liste des users sans le password

app.get('/api/users', (req, res) => {
  res.json(users.map((u) => ({ id: u.id, username: u.username })));
  // res.json(users.map((u) => omit(u, 'password')));
});

// Exercice 2
// Sur une requête POST /api/users
// Repondre en JSON le user créé avec un id sans le password
// et le stocker dans le tableau users
app.post('/api/users', express.json(), (req, res) => {
  const user = req.body;

  user.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  users.push(user);

  res.status(201); // CREATED
  res.json({
    id: user.id,
    username: user.username,
  });
});

// Exercice 3
// Sur une requête DELETE /api/todos/:todoId
// Supprimer la todo correspondante du tableau (relire la doc MDN sur les tableaux)
// Répondre la todo supprimée
app.delete('/api/todos/:todoId', /*authenticate,*/  (req, res) => {
  const todoId = Number(req.params.todoId);

  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.status(404);
    return res.json({ msg: `Todo ${todoId} not found` });
  }

  const indexToDelete = todos.indexOf(todo);

  // supprimer
  todos.splice(indexToDelete, 1);

  res.json(todo);
});

app.post('/api/users/login', express.json(), (req, res) => {
  const credentials = req.body;

  const user = users.find(
    (u) =>
      u.username === credentials.username &&
      u.password === credentials.password,
  );

  if (!user) {
    res.status(400); // BAD REQUEST
    return res.json({ msg: 'Bad credentials' });
  }

  return res.json({
    token: jwt.sign({ username: user.username }, SECRET),
  });
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
