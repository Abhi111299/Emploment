import RolesController from "../../controllers/role.js";
import { SingleRole, tags } from "./common.js";

// Options for get single Role by ID
export const getRoleOpts = {
  schema: {
    tags,
    response: {
      200: SingleRole,
    },
    security: [{ apiKey: [] }],
  },
  handler: RolesController.getRole,
};
