const http = require("http");
const user = require('./user');
const server = http.createServer(user);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`successfully run the server... localhost:${PORT}`);
});
