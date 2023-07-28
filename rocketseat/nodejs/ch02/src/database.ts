import "dotenv/config";
import { Knex, knex } from "knex";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL not found");
}

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const database = knex(config);
