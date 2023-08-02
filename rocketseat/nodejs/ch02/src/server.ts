import { app } from "./app";
import { env } from "./env";

try {
  app
    .listen({ port: env.PORT })
    .then(() => console.log("Server is running..."));
} catch (error) {
  app.log.error(error);
}
