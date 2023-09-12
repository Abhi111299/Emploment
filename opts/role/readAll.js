import RolesController from "../../controllers/role.js";
import { AllRole, tags } from "./common.js";
import { verifyToken } from "../../middleware/auth.js";

// Options for get all Roles
export const getRolesOpts = {
  schema: {
    tags,
    response: {
      200: {
        type: "object",
        properties: {
          count: { type: "integer" },
          pagination: { type: "string" },
          roles: AllRole,
        },
      },
    },
    security: [{ apiKey: [] }],
  },
  handler: RolesController.getRoles,
  preHandler: [verifyToken],
};
