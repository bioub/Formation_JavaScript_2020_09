const http = require('http');

const server = http.createServer((req, res) => {
  console.log('URL : ', req.url);
  console.log('Method : ', req.method);
  console.log('Headers : ', req.headers);

  res.statusCode = 200;
  res.setHeader('Server', 'Node.js 12');
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello');
  res.end();
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
server.on('error', (err) => {
  console.log(err);
});

server.listen(3000, () => {
  console.log('Server started');
});
