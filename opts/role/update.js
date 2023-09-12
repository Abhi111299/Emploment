import RolesController from "../../controllers/role.js";
import { SingleRole, tags } from "./common.js";

// Options for updating a Role by ID
export const updateRoleOpts = {
  schema: {
    tags,
    response: {
      200: SingleRole,
    },
    security: [{ apiKey: [] }],
  },
  handler: RolesController.updateRole,
};
