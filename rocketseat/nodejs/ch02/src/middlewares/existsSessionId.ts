import { FastifyReply, FastifyRequest } from "fastify";

const existsSessionId = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const sessionId = request.cookies.sessionId;

  if (!sessionId) {
    return response.status(401).send({
      error: "No data.",
    });
  }
};

export { existsSessionId };
