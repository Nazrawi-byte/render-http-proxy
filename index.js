const http = require('http');
const net = require('net');

const proxy = http.createServer();

proxy.on('connect', (req, clientSocket) => {
  const [host, port] = req.url.split(':');
  const serverSocket = net.connect(port || 80, host, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
    clientSocket.pipe(serverSocket);
    serverSocket.pipe(clientSocket);
  });
});

proxy.listen(80, () => console.log('HTTP proxy running on port 80'));
