const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count === 10) {
      clearInterval(interval);
      if (!res.socket.destroyed) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Task completed');
      }
    }
  }, 1000);

  req.on('close', () => {
    console.error('Client closed connection prematurely');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});