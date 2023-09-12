import {
  getPermissionsOpts,
  getPermissionOpts,
  postPermissionOpts,
  deletePermissionOpts,
  updatePermissionOpts,
} from "../opts/permission/exports.js";

async function permissionRoutes(fastify, options, done) {
  // Get all Permissions
  // fastify.addHook('preHandler', auth)
  fastify.get("/permissions", getPermissionsOpts);

  // Get single Permission
  fastify.get("/permission/:id", getPermissionOpts);

  // Add Permission
  fastify.post("/permission", postPermissionOpts);

  // Delete Permission
  fastify.delete("/permission/:id", deletePermissionOpts);

  // Update Permission
  fastify.put("/permission/:id", updatePermissionOpts);

  done();
}

export default permissionRoutes;
