// Create web server
// Create a web server that listens for incoming requests on port 3000 and reads the comments.json file. When a request comes in, it should send the comments as the response.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream('./comments.json');
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});