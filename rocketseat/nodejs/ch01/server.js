// CommonJS
// const http = require('http')

// ESModule
import http from "node:http";

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      name: "Alexandre",
    });

    return response.end("Created");
  }

  response.end("Not found");
});

server.listen(3333);
