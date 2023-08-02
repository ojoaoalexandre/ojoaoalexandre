import { randomUUID } from "crypto";
import { database } from "../database";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { existsSessionId } from "../middlewares/existsSessionId";

export const transactionsRoutes = async (app: FastifyInstance) => {
  app.addHook("preHandler", async (request, response) => {
    console.log(`[${request.method}]: ${request.url}`);
  });

  app.get(
    "/",
    {
      preHandler: [existsSessionId],
    },
    async (request, response) => {
      const { sessionId } = request.cookies;

      if (!sessionId) {
        return response.status(401).send({
          error: "No data.",
        });
      }

      const transactions = await database("transactions")
        .where("session_id", sessionId)
        .select();

      return { transactions };
    }
  );

  app.get(
    "/:id",
    {
      preHandler: [existsSessionId],
    },
    async (request) => {
      const getTransactionSchema = z.object({
        id: z.string().uuid(),
      });

      const { sessionId } = request.cookies;
      const { id } = getTransactionSchema.parse(request.params);

      const transaction = await database("transactions")
        .where({
          session_id: sessionId,
          id,
        })
        .first();
      return { transaction };
    }
  );

  app.get(
    "/report",
    {
      preHandler: [existsSessionId],
    },
    async (request) => {
      const { sessionId } = request.cookies;

      const report = await database("transactions")
        .where("session_id", sessionId)
        .sum("amount", { as: "amount" })
        .first();

      return { report };
    }
  );

  app.post("/", async (request, response) => {
    const createTransactionSchema = z.object({
      description: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { description, amount, type } = createTransactionSchema.parse(
      request.body
    );

    let { sessionId } = request.cookies;

    if (!sessionId) {
      sessionId = randomUUID();

      response.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });
    }

    await database("transactions").insert({
      id: randomUUID(),
      description,
      amount: type === "credit" ? amount : amount * -1,
      session_id: sessionId,
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
