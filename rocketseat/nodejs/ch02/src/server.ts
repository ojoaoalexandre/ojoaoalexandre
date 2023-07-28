import fastify from "fastify";
import { database } from "./database";
import { randomUUID } from "crypto";

const app = fastify();

app.get("/users", async () => {
  await database("transactions").insert({
    id: randomUUID(),
    description: "Primeiro registro",
    amount: 10.2,
  });

  const transaction = database("transactions").select("*");
  return transaction;
});

try {
  app.listen({ port: 3333 }).then(() => console.log("Server is running..."));
} catch (error) {
  app.log.error(error);
}
