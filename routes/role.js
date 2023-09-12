import {
    getRolesOpts,
    getRoleOpts,
    postRoleOpts,
    deleteRoleOpts,
    updateRoleOpts,
  } from "../opts/role/exports.js";
  
  async function roleRoutes(fastify, options, done) {
    // Get all roles
    // fastify.addHook('preHandler', auth)
    fastify.get("/roles", getRolesOpts);
  
    // Get single roles
    fastify.get("/roles/:id", getRoleOpts);
  
    // Add Role
    fastify.post("/roles", postRoleOpts);
  
    // Delete Role
    fastify.delete("/roles/:id", deleteRoleOpts);
  
    // Update Role
    fastify.put("/roles/:id", updateRoleOpts);
  
    done();
  }
  
  export default roleRoutes;
  