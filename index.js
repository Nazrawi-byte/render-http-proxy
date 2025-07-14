const SocksServer = require('socksv5').SocksServer;

const PORT = process.env.PORT || 1080;

const server = SocksServer.createServer((info, accept, deny) => {
  accept();
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ SOCKS5 proxy server running on port ${PORT}`);
});

server.useAuth(SocksServer.auth.None());
