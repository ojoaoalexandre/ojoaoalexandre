import { randomUUID } from "crypto";
import { database } from "../database";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export const transactionsRoutes = async (app: FastifyInstance) => {
  app.get("/", async () => {
    const transactions = await database("transactions").select();

    return { transactions };
  });

  app.get("/:id", async (request) => {
    const getTransactionSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getTransactionSchema.parse(request.params);

    const transaction = await database("transactions").where("id", id).first();
    return { transaction };
  });

  app.get("/report", async () => {
    const report = await database("transactions")
      .sum("amount", { as: "amount" })
      .first();

    return { report };
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
