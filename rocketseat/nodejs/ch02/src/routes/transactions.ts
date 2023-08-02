import { randomUUID } from "crypto";
import { database } from "../database";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export const transactionsRoutes = async (app: FastifyInstance) => {
  app.get("/", async () => {
    const transaction = database("transactions").select("*");

    return transaction;
  });

  app.post("/", async (request, response) => {
    const createTransactionSchema = z.object({
      description: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { description, amount, type } = createTransactionSchema.parse(
      request.body
    );

    await database("transactions").insert({
      id: randomUUID(),
      description,
      amount: type === "credit" ? amount : amount * -1,
    });

    return response.status(201).send();
  });

  app.delete("/:id", async (request, response) => {
    const deleteTransactionSchema = z.object({
      id: z.string(),
    });

    const { id } = deleteTransactionSchema.parse(request.params);

    await database("transactions").where("id", id).delete();

    return response.status(200).send();
  });
};
