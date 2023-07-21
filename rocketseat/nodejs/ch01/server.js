// CommonJS
// const http = require('http')

// ESModule
import http from "node:http";

const server = http.createServer((request, response) => {
  response.end("Hello World 123");
});

server.listen(3333);
