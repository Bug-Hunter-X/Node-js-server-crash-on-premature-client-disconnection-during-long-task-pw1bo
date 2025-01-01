const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count === 10) {
      clearInterval(interval);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Task completed');
    }
  }, 1000);

  // If the client closes the connection before the task completes, the server won't be able to send the response and will throw an error
  req.on('close', () => {
    console.error('Client closed connection prematurely');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});