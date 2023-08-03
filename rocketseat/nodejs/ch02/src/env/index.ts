import { config } from "dotenv";
import { z } from "zod";

if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test" });
} else {
  config();
}

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  BASE_URL: z.string(),
  DATABASE_CLIENT: z.enum(["sqlite3", "pg"]),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
});

const _env = schema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format());

  throw new Error("Invalid .env");
}

export const env = _env.data;
