import {
  getUsersOpts,
  getUserOpts,
  postUserOpts,
  deleteUserOpts,
  updateUserOpts,
} from "../opts/user/exports.js";

async function userRoutes(fastify, options, done) {
  // Get all Users
  // fastify.addHook('preHandler', auth)
  fastify.get("/users", getUsersOpts);

  // Get single Users
  fastify.get("/users/:id", getUserOpts);

  // Add User
  fastify.post("/users", postUserOpts);

  // Delete User
  fastify.delete("/users/:id", deleteUserOpts);

  // Update User
  fastify.put("/users/:id", updateUserOpts);

  done();
}

export default userRoutes;
