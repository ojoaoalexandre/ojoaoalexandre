import { Knex, knex } from "knex";

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: "./tmp/app.db",
  },
};

export const database = knex(config);
