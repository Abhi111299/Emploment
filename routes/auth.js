import { postAuthLoginOpts } from "../opts/auth/exports.js";

async function authRoutes(fastify, options, done) {
  // authenticate user and return JWT
  fastify.post("/auth/login", postAuthLoginOpts);
  done();
}

export default authRoutes;
