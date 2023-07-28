import fastify from "fastify";
import { database } from "./database";

const app = fastify();

app.get("/users", async () => {
  const test = await database("sqlite_schema").select("*");

  return test;
});

try {
  app.listen({ port: 3333 }).then(() => console.log("Server is running..."));
} catch (error) {
  app.log.error(error);
}
