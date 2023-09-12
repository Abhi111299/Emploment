import RolesController from "../../controllers/role.js";
import { verifyToken } from "../../middleware/auth.js";
import { SingleRole, tags } from "./common.js";

// Options for creating new role
export const postRoleOpts = {
  schema: {
    tags,
    body: {
      type: "object",
      required: ["name", "permissions", "created_by"],
      properties: {
        name: { type: "string" },
        permissions: { type: "array" },
        created_by: { type: "string" },
      },
    },
    response: {
      201: SingleRole,
    },
    security: [{ apiKey: [] }],
  },
  handler: RolesController.addRole,
  preHandler: [verifyToken],
};
