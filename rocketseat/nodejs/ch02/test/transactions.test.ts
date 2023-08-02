import { test, beforeAll, afterAll, describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app";

describe("Transactions Routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  // it ou test, tanto faz, dão o mesmo resultado
  it("should be able to create a new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        description: "Transaction Test",
        amount: 8500,
        type: "credit",
      })
      .expect(201);
  });

  // it.skip("should be ..."...) -> Pular o teste
  // it.todo("should be ..."...) -> Para quando queremos apenas listar para lembrar de fazer o teste
  // it.only("should be ..."...) -> Executa apenas esse teste
  it("should be able to list all transactions", async () => {
    const createTransactionsResponse = await request(app.server)
      .post("/transactions")
      .send({
        description: "Transaction Test",
        amount: 8500,
        type: "credit",
      });

    const cookies = createTransactionsResponse.get("Set-Cookie");

    const response = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    expect(response.body.transactions).toEqual([
      expect.objectContaining({
        description: "Transaction Test",
        amount: 8500,
      }),
    ]);
  });
});
